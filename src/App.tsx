import NavBar from './layouts/NavBar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RuedaContainer from './containers/rueda/RuedaContainer'
import Footer from './layouts/Footer'
import { Box, Card } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PasesConsulta } from './page/pasesConsulta'
import TokenContainer from './containers/token/Token'
import { ThemeProvider } from '@mui/material/styles'
import LogAuditoriaContainer from './containers/logAuditoria/LogAuditoriaContainer'
import { theme } from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme('light')}>
      <BrowserRouter basename="/">
        <NavBar />
        <Box m={2}>
          <Routes>
            <Route path="/" Component={RuedaContainer} />
            <Route path="/consulta" Component={PasesConsulta} />
            <Route path="/token" Component={TokenContainer} />
            <Route path="/log" Component={LogAuditoriaContainer} />
          </Routes>
        </Box>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
