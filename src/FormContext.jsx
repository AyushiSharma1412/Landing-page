// src/context/FormContext.js
import React, { createContext, useContext, useState } from 'react';
import { db } from './Firebase';
import { addDoc, collection } from 'firebase/firestore';

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    industryType: '',
    jobRole: '',
    teamStrength: '',
    hostedLocation: '',
  });

  const saveFormDataToFirestore = async () => {
    try {
      // Save to Firestore
      const docRef = await addDoc(collection(db, 'users'), formData);
      console.log('Form data successfully saved with ID:', docRef.id);

      // Prepare the data for the API request
      const requestBody = {
        tenant_id: formData.organizationName,  // Assuming organizationName is used as tenant_id
        organization: formData.organizationName,
        password: 'default_password',  // Use an appropriate password here
      };

      // Send POST request to /createTenant
      const response = await fetch('https://webappbaackend.azurewebsites.net/createTenant/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to create tenant');
      }

      const data = await response.json();
      console.log('Tenant created successfully:', data);

    } catch (error) {
      console.error('Error saving form data or creating tenant:', error);
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, saveFormDataToFirestore }}>
      {children}
    </FormContext.Provider>
  );
};
