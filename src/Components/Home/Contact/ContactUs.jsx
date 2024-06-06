// import React, { useState } from 'react';
// import { Box, Typography, Button, List, ListItem, Container, Grid } from '@mui/material';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const ContactUs = () => {
//   const [openQuestions, setOpenQuestions] = useState([]);

//   const handleQuestionClick = (index) => {
//     setOpenQuestions((prevOpenQuestions) => {
//       const isOpen = prevOpenQuestions.includes(index);
//       return isOpen
//         ? prevOpenQuestions.filter((i) => i !== index)
//         : [...prevOpenQuestions, index];
//     });
//   };

//   const questions = [
//     {
//       question: 'What is a CRM dashboard?',
//       answer:
//         'A CRM is a data organization tool that helps companies manage their customer information, sales opportunities, resources, pipelines, and activities. Serving both administrative and analytics purposes, a CRM system centralizes customer data to improve collaboration and drive sales growth.',
//     },
//     {
//       question: 'How can a CRM dashboard benefit my business?',
//       answer: 'Answer for how a CRM dashboard can benefit your business.',
//     },
//     {
//       question: 'Is the CRM dashboard easy to use?',
//       answer: 'Answer for how easy it is to use the CRM dashboard.',
//     },
//     {
//       question: 'Can I customize the CRM dashboard to suit my business needs?',
//       answer: 'Answer for customizing the CRM dashboard.',
//     },
//     {
//       question: 'Is my data safe with your CRM dashboard?',
//       answer: 'Answer for data safety with the CRM dashboard.',
//     },
//   ];

//   const otherQuestions = [
//     'What kind of support do you offer?',
//     'Can I try the CRM dashboard before committing to a plan?',
//     'Do you offer training for using the CRM dashboard?',
//   ];

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Box sx={{ textAlign: 'center', mb: 2 }}>
//         <Typography variant="h4" gutterBottom>
//           CONTACT US
//         </Typography>
//         <Typography variant="h2" gutterBottom>
//           Unlock the answers to queries about our CRM
//         </Typography>
//       </Box>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <List>
//             {questions.map((q, index) => (
//               <ListItem key={index} disableGutters>
//                 <Box
//                   sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
//                   onClick={() => handleQuestionClick(index)}
//                 >
//                   {openQuestions.includes(index) ? (
//                     <ArrowDropDownIcon />
//                   ) : (
//                     <ArrowRightIcon />
//                   )}
//                   <Typography variant="body1" fontWeight="bold">
//                     {q.question}
//                   </Typography>
//                 </Box>
//                 {openQuestions.includes(index) && (
//                   <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
//                     {q.answer}
//                   </Typography>
//                 )}
//               </ListItem>
//             ))}
//           </List>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <List>
//             {otherQuestions.map((q, index) => (
//               <ListItem key={index} disableGutters>
//                 <ArrowRightIcon />
//                 <Typography variant="body1" fontWeight="bold">
//                   {q}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//           <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//             If you don't see the information you're looking for, feel free to contact our support team for more assistance.
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2, backgroundColor: '#6D31ED', borderRadius: '4rem', '&:hover': { backgroundColor: '#6D31ED' } }}
//             // startIcon={<ContactMailIcon />}
//           >
//             Contact Us
//           </Button>
//         </Grid>
//       </Grid>
//       <Box sx={{ textAlign: 'center', mt: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Ready to Transform Your CRM?
//         </Typography>
//         <Typography variant="body1" gutterBottom>
//           Get started today and discover the difference a powerful CRM can make for your business.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ color: 'white', mb: 4, background: '#6D31ED', borderRadius: '4rem', '&:hover': { backgroundColor: '#6D31ED' } }}
//         >
//           Get Started
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default ContactUs;



import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, Container, Grid } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ContactUs = () => {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestions((prevOpenQuestions) => {
      const isOpen = prevOpenQuestions.includes(index);
      const newOpenQuestions = isOpen
        ? prevOpenQuestions.filter((i) => i !== index)
        : [...prevOpenQuestions, index];
      setActiveQuestion(isOpen ? null : index);
      return newOpenQuestions;
    });
  };

  const questions = [
    {
      question: 'What is a CRM dashboard?',
      answer:
        'A CRM is a data organization tool that helps companies manage their customer information, sales opportunities, resources, pipelines, and activities. Serving both administrative and analytics purposes, a CRM system centralizes customer data to improve collaboration and drive sales growth.',
    },
    {
      question: 'How can a CRM dashboard benefit my business?',
      answer: 'Answer for how a CRM dashboard can benefit your business.',
    },
    {
      question: 'Is the CRM dashboard easy to use?',
      answer: 'Answer for how easy it is to use the CRM dashboard.',
    },
    {
      question: 'Can I customize the CRM dashboard to suit my business needs?',
      answer: 'Answer for customizing the CRM dashboard.',
    },
    {
      question: 'Is my data safe with your CRM dashboard?',
      answer: 'Answer for data safety with the CRM dashboard.',
    },
  ];

  const otherQuestions = [
    'What kind of support do you offer?',
    'Can I try the CRM dashboard before committing to a plan?',
    'Do you offer training for using the CRM dashboard?',
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          CONTACT US
        </Typography>
        <Typography variant="h2" gutterBottom>
          Unlock the answers to queries about our CRM
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <List>
            {questions.map((q, index) => (
              <ListItem key={index} disableGutters>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                    color: activeQuestion === index ? '#6D31ED' : 'inherit',
                  }}
                  onClick={() => handleQuestionClick(index)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {openQuestions.includes(index) ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowRightIcon />
                    )}
                    <Typography variant="body1" fontWeight="bold">
                      {q.question}
                    </Typography>
                  </Box>
                  {openQuestions.includes(index) && (
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                      {q.answer}
                    </Typography>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            {otherQuestions.map((q, index) => (
              <ListItem key={index} disableGutters>
                <ArrowRightIcon />
                <Typography variant="body1" fontWeight="bold">
                  {q}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            If you don't see the information you're looking for, feel free to contact our support team for more assistance.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, backgroundColor: '#6D31ED', borderRadius: '4rem', '&:hover': { backgroundColor: '#6D31ED' } }}
            // startIcon={<ContactMailIcon />}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Transform Your CRM?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Get started today and discover the difference a powerful CRM can make for your business.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ color: 'white', mb: 4, background: '#6D31ED', borderRadius: '4rem', '&:hover': { backgroundColor: '#6D31ED' } }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;