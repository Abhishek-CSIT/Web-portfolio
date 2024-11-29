import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#3f51b5' },
        secondary: { main: '#f50057' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#aaaaaa' },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontWeight: 600, fontSize: '2.5rem', color: '#ffffff' },
        h2: { fontWeight: 500, fontSize: '2rem', color: '#ffffff' },
    },
});

export default theme;
