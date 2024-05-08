import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
const theme = createTheme({
  typography:{
    fontFamily: '"Josefin Sans", sans-serif',
    fontWeightRegular: '300',
    fontSize: 16,
  },
  palette: {
    // primary color considered by the theme
    primary: {
      main: '#3C484D',
    },
    background: {
      default: '#3C484D',
    },
    text: {
      primary: '#ffffff',
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
