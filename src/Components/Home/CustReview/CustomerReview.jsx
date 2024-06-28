import React, { useEffect, useState } from 'react';
import './CustomerReview.css';
import { Typography, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PopUp from '../PopUp/PopUp';  // Import the new PopUp component
import { trackEvent } from '../../../Ga'; // Import the trackEvent function

const CustomerReviews = () => {
  const reviews = [
    {
      title: "Data-Driven Decisions: Leveraging Respondo's Analytics Suite",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tiBRwyGODtpBUM-7BcJoZNxbJqK84BqtZg&s',
      author: 'Author 1',
      rating: 5,
    },
    {
      title: 'Tools build the workflow: Workflow support customer stories',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR48LoFHBZXunbYp-PlllTPPEgrgml-paqg&s',
      author: 'Author 2',
      rating: 5,
    },
    {
      title: 'How to custom a report with Respondo dashboards',
      author: 'Author 3',
      rating: 4,
    },
    {
      title: 'Adapting to Multi-Channel: Handling Customers Where They Are',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEokkK8rDsQmJL6Uk-IdCRaxKcNucuqf2MdDq7Cbwzg2qawpAIgtbxUm7OAsqDPJowq9Y&usqp=CAU',
      author: 'Author 4',
      rating: 4,
    },
    {
      title: 'Streamline Operations with Smart Ticketing System',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCqPQkaJwpCsMG4znVnNw3fie_li_N3kL3R4Cecusrs4Z2hKL7TjCnyd4UGzzaGkz0Qo&usqp=CAU',
      author: 'Author 5',
      rating: 5,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [popUpVisible, setPopUpVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setPopUpVisible(true);  // Show the pop-up when the component is in view
    }
  }, [controls, inView]);

  const handlePopUpClick = () => {
    window.location.href = 'https://your-redirect-url.com';  // Redirect to the desired URL
  };

  const handleReviewClick = (title) => {
    // Track event when a review is clicked
    trackEvent('CustomerReviews', 'Review Click', `Review Title: ${title}`);
    
    // Perform any other actions related to review click
  };

  const handleLoadMoreClick = () => {
    // Track event when 'Load more' is clicked
    trackEvent('CustomerReviews', 'Load More Click');
    
    // Perform any other actions related to load more click
  };

  return (
    <div className="customer-reviews-container">
      <Typography variant="h6" gutterBottom>
        Customer Success Stories
      </Typography>
      <Typography variant="h4" gutterBottom textAlign='center' fontWeight='600'>
        Discover how businesses like yours are transforming <br /> their customer relationships and achieving their <br /> goals with our CRM
      </Typography>
      <motion.div
        className="reviews-grid"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <div className="row">
          {[reviews[0], reviews[1]].map((review, index) => (
            <motion.div
              className="review-card"
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              onClick={() => handleReviewClick(review.title)}
            >
              {review.image && <img src={review.image} alt="Review" className="review-image" />}
              {review.author && (
                <div className="review-author-container">
                  <Avatar alt="Avatar" src="/avatar.jpg" className="avatar" />
                  <Typography variant="subtitle1" className="review-author">
                    {review.author}
                  </Typography>
                </div>
              )}
              <Typography variant="body1" gutterBottom className="review-title">
                {review.title}
              </Typography>
              <div className="rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <StarIcon key={i} className="star-icon" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="row">
          <motion.div
            className="review-card"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
            onClick={() => handleReviewClick(reviews[2].title)}
          >
            {reviews[2].author && (
              <div className="review-author-container">
                <Avatar alt="Avatar" src="/avatar.jpg" className="avatar" />
                <Typography variant="subtitle1" className="review-author">
                  {reviews[2].author}
                </Typography>
              </div>
            )}
            <Typography variant="body1" gutterBottom className="review-title">
              {reviews[2].title}
            </Typography>
            <div className="rating">
              {Array.from({ length: reviews[2].rating }, (_, i) => (
                <StarIcon key={i} className="star-icon" />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="row">
          {[reviews[3], reviews[4]].map((review, index) => (
            <motion.div
              className="review-card"
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              onClick={() => handleReviewClick(review.title)}
            >
              {review.image && <img src={review.image} alt="Review" className="review-image" />}
              {review.author && (
                <div className="review-author-container">
                  <Avatar alt="Avatar" src="/avatar.jpg" className="avatar" />
                  <Typography variant="subtitle1" className="review-author">
                    {review.author}
                  </Typography>
                </div>
              )}
              <Typography variant="body1" gutterBottom className="review-title">
                {review.title}
              </Typography>
              <div className="rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <StarIcon key={i} className="star-icon" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Typography variant="body1" color="primary" className="load-more" onClick={handleLoadMoreClick}>
        Load more →
      </Typography>
      <PopUp visible={popUpVisible} onClick={handlePopUpClick} />  {/* Add the PopUp component */}
    </div>
  );
};

export default CustomerReviews;
