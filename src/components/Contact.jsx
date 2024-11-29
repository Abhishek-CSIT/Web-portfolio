import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbar, setSnackbar] = useState({ open: false, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbar({ open: true, success: true });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      component="form"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 3,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Contact Me
      </Typography>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        sx={{ my: 2 }}
        required
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        sx={{ my: 2 }}
        required
      />
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={formData.message}
        onChange={handleChange}
        sx={{ my: 2 }}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          py: 1,
          background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        }}
      >
        Send
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ open: false, success: false })}
      >
        <Alert
          severity={snackbar.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {snackbar.success ? 'Your query has been sent successfully!' : 'Failed to send your query.'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
