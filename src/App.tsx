import NavBar from './layouts/NavBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RuedaContainer from './containers/rueda/RuedaContainer'
import Footer from './layouts/Footer'
import { Box, Card } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PasesConsulta } from './page/pasesConsulta'
import TokenContainer from './containers/token/Token'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import LogAuditoriaContainer from './containers/logAuditoria/LogAuditoriaContainer'
const theme = createTheme({
  palette: {
    secondary: {
      main: '#FEFEFA' // Color secundario
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif' // Fuente de texto predeterminada
  },
  spacing: 8 // Espaciado base (en píxeles)
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <NavBar />
        <Box m={2}>
          <Card variant="outlined">
            <Box p={4}>
              {/* <InternalNav /> */}
              <Routes>
                <Route path="/" Component={RuedaContainer} />
                <Route path="/consulta" Component={PasesConsulta} />
                <Route path="/token" Component={TokenContainer} />
                <Route path="/log" Component={LogAuditoriaContainer} />
              </Routes>
            </Box>
          </Card>
        </Box>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
