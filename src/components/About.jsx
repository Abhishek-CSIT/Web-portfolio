import React from 'react';
import { Box, Typography, Divider, Slide } from '@mui/material';
import { styled } from '@mui/system';

import myImage from '../assests/pic.jpg'; 

const StyledImage = styled(Box)(({ theme }) => ({
    width: '250px', 
    height: 'auto',
    margin: '0 auto', 
    borderRadius: '8px', 
    overflow: 'hidden', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
  }));

const About = () => (
  <Box sx={{ my: 5, px: 3 }}>
    <Slide direction="down" in timeout={500}>
      <StyledImage>
        <img
          src={myImage} 
          alt="Abhishek Chauhan"
          style={{
            width: '100%', 
            borderRadius: '10px', 
          }}
        />
      </StyledImage>
    </Slide>

    <Typography variant="h2" color="primary" textAlign="center" gutterBottom>
      About Me
    </Typography>

    <Divider sx={{ mb: 4 }} />

    <Typography variant="body1" sx={{ mb: 2 }}>
      Hello, I'm Abhishek Chauhan, a passionate Computer Science Engineer
      with expertise in full-stack development. I'm eager to apply my skills
      in a professional environment and grow in the field of technology.
    </Typography>

    <Typography variant="body1" sx={{ mb: 2 }}>
      I specialize in web development technologies like React, Node.js, and
      MongoDB, and I'm always keen to explore new tools and technologies.
    </Typography>
  </Box>
);

export default About;
