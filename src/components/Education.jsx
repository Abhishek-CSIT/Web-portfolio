import React from 'react';
import { Box, Typography, Paper, Divider, Slide } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '16px',
  marginBottom: '32px',
  borderRadius: '10px',
  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
  color: 'white',
}));

const educationData = [
  {
    title: 'B. Tech (Computer Science)',
    institution: 'Meerut Institute of Engineering and Technology',
    duration: '08/2020 - 10/2024',
    cgpa: 'CGPA: 6.7',
  },
  {
    title: 'Class 12',
    institution: 'Gateway International School, Baghpat',
    duration: '2020',
    cgpa: 'CGPA: 8.3',
  },
  {
    title: 'Class 10',
    institution: 'Gateway International School, Baghpat',
    duration: '2018',
    cgpa: 'CGPA: 7.3',
  },
];

const Education = () => (
  <Box sx={{ my: 5, px: 3 }}>
    <Typography variant="h2" color="primary" textAlign="center" gutterBottom>
      Education
    </Typography>

    <Divider sx={{ mb: 4 }} />

    {educationData.map((edu, index) => (
      <Slide
        direction={index % 2 === 0 ? 'left' : 'right'}
        in
        timeout={500 + index * 300}
        key={index}
      >
        <StyledPaper>
          <Box display="flex" alignItems="center">
            <SchoolIcon sx={{ fontSize: 40, marginRight: 2 }} />
            <Box>
              <Typography variant="h5" gutterBottom>
                {edu.title}
              </Typography>
              <Typography variant="body1">{edu.institution}</Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                {edu.duration}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {edu.cgpa}
              </Typography>
            </Box>
          </Box>
        </StyledPaper>
      </Slide>
    ))}
  </Box>
);

export default Education;
