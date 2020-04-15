import React from 'react';
import logo from './logo.svg';

import './App.css';

import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import { Box, Container } from "@material-ui/core"

import Navigation from "./components/Navigation.js"
import Home from "./components/Home.js"
import About from "./components/About.js"

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F5EFED',
    },
    primary: {
      main: '#A30000',
    },
    secondary: {
      main: '#EC4E20',
    },
    text: {
      primary: '#080F0F',
    },
  },
  typography: {
    fontFamily: "'Open Sans', 'Helvetica', 'Arial', sans serif",
    h1: {
      fontFamily: "'Viaoda Libre', 'Georgia', serif",
    },
    h6: {
      fontFamily: "'Viaoda Libre', 'Georgia', serif",
      fontSize: "3rem",
    },
    h5: {
      fontFamily: "'Viaoda Libre', 'Georgia', serif",
      fontSize: "2rem",
    },
    h3: {
      fontFamily: "'Viaoda Libre', 'Georgia', serif",
      fontSize: "5rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
