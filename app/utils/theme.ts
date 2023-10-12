import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h4: {
      marginBottom: '20px',
      color: '#128D6C'
    },
    h5: {
      fontWeight: 500
    }
  },
    palette: {
      primary: {
        main: '#128D6C',
        dark: '#128D6C',
        light: '#D6F0E9',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#F6F6F6',
      }
    },
  });