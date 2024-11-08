'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
        palette:{
            background:{
                default: '#F9F9FE',
                paper: '#EEEEF9',
            }
        }
    },
    dark: {
        palette: {
            background: {
              default: '#2A4364',
              paper: '#112E4D',
            },
        }, 
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;