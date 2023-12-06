import { createTheme } from '@mui/material'
declare module '@mui/material/styles' {
  interface PaletteOptions {
    complement: {
      main: string
    }
  }
  interface Palette {
    complement: {
      main: string
    }
  }
}

export const palette = {
  MACRO_PRIMARY: '#0070ba',
  MACRO_SECONDARY: '#21394a',
  MACRO_INFO: '#e5ebf3',
  MACRO_COMPLEMENT: '#f57eb6',
  MACRO_ERROR: '#f8485e',
  MACRO_SUCCESS: '#00af66'
}
export const theme = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: palette.MACRO_PRIMARY
      },
      secondary: {
        main: palette.MACRO_SECONDARY
      },
      info: {
        main: palette.MACRO_INFO
      },
      complement: {
        main: palette.MACRO_COMPLEMENT
      },
      error: {
        main: palette.MACRO_ERROR
      },
      success: {
        main: palette.MACRO_SUCCESS
      }
    },
    components: {
      MuiTypography: {
        defaultProps: {
          style: {
            fontFamily: '"Lato", Arial, sans-serif'
          }
        }
      },
      MuiButton: {
        defaultProps: {
          style: {
            fontFamily: '"Lato", Arial, sans-serif',
            fontWeight: 600
          }
        }
      },
      MuiCard: {
        defaultProps: {
          style: {
            backgroundColor: palette.MACRO_INFO,
            borderRadius: 0
          }
        }
      }
    }
  })
