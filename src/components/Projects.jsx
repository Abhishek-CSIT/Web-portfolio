import React from 'react';
import weatherAppImage from '../assests/img.png'; 
import cryptoImg from '../assests/crypto.png'; 
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { Slide } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const projects = [
  {
    title: 'Weather App',
    description: 'A Weather App displaying current weather conditions and forecasts worldwide.',
    image: weatherAppImage, 
    stack: 'React, API Integration, CSS, State Management',
    link: 'https://github.com/Abhishek-CSIT/Weather_App', 
  },
  {
    title: 'Cryptoplace',
    description: 'A fully functional cryptoplace showcasing front-end expertise.',
    image: cryptoImg, 
    stack: 'HTML, CSS, JavaScript, React',
    link: 'https://github.com/Abhishek-CSIT/Cryptoplace',
  },
];

const Projects = () => (
  <Box sx={{ my: 5, px: 3 }}>
    <Typography variant="h2" color="primary" textAlign="center" gutterBottom>
      Projects
    </Typography>

    <Grid container spacing={4} sx={{ mt: 4 }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Slide direction="up" in timeout={500 + index * 300}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={project.image} 
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ mt: 2, fontStyle: 'italic', color: 'text.primary' }}
                >
                  {project.stack}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => {
                    window.open(project.link, '_blank');
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </StyledCard>
          </Slide>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
