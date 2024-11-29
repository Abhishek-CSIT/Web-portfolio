import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import theme from './themes/theme';
import Education from './components/Education';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
                <About />
                <Education/>
                <Projects />
                <Contact />
            </main>
        </ThemeProvider>
    );
}

export default App;
