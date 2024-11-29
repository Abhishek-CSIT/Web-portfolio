import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => (
  <AppBar position="static" sx={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        Abhishek Chauhan
      </Typography>
      <Box>
        <IconButton
          color="inherit"
          href="mailto:abhishekchauhan1405@gmail.com"
          sx={{ mx: 1 }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/Abhishek-CSIT"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
