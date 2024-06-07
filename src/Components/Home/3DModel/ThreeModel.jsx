import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeModel = () => {
  const mountRef = useRef(null);
  const animationMixers = useRef([]);
  const [initialRotationDone, setInitialRotationDone] = useState(false);
  const [modelRef, setModelRef] = useState(null);
  const [originalPosition, setOriginalPosition] = useState(null);
  const [originalRotation, setOriginalRotation] = useState(null);
  const [resetTimeout, setResetTimeout] = useState(null);

  useEffect(() => {
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const updateRendererSize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
    };
    updateRendererSize();
    renderer.setClearColor('#ffffff', 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(40, mountRef.current.clientWidth / mountRef.current.clientHeight, 1, 1000);
    camera.position.set(0.3, 0.3, 0.3);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.4;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 0.4, 0);
    controls.update();

    // Ground setup (for shadow)
    const groundGeometry = new THREE.PlaneGeometry(10, 10, 4, 12);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.ShadowMaterial({ color: 0x0000, opacity: 0 });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Increased intensity
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10, 100); // Increased intensity
    pointLight.position.set(0, 3, 3); // Adjusted position
    scene.add(pointLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2); // Additional directional light
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Load GLTF model
    const loader = new GLTFLoader().setPath('/animated_robot/');
    loader.load(
      'scene.gltf',
      (gltf) => {
        console.log('loading model');
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        mesh.position.set(0, 0, 0);
        scene.add(mesh);
        setModelRef(mesh);
        setOriginalPosition(mesh.position.clone());
        setOriginalRotation(mesh.rotation.clone());

        // Play the animation
        const animations = gltf.animations;
        const mixer = new THREE.AnimationMixer(mesh);
        animationMixers.current.push(mixer);
        const clip = animations[0];
        const action = mixer.clipAction(clip);
        action.play();

        // document.getElementById('progress-container').style.display = 'none';
      },
    );

    // Resize event handler
    window.addEventListener('resize', () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Update animation mixers
      animationMixers.current.forEach((mixer) => {
        mixer.update(0.016);
      });

      // Reset model position and rotation after 2 seconds if changed
      if (modelRef && (modelRef.position.distanceToSquared(originalPosition) > 0.001 || modelRef.rotation.distanceToSquared(originalRotation) > 0.001)) {
        clearTimeout(resetTimeout);
        setResetTimeout(
          setTimeout(() => {
            modelRef.position.copy(originalPosition);
            modelRef.rotation.copy(originalRotation);
          }, 2000)
        );
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      animationMixers.current.forEach((mixer) => {
        mixer.uncacheRoot(mixer.getRoot());
      });
      clearTimeout(resetTimeout);
      window.removeEventListener('resize', updateRendererSize);
    };
  }, [initialRotationDone]);

  return <div ref={mountRef} style={{ width: '30vw', height: '80vh' }} />;
};

export default ThreeModel;
