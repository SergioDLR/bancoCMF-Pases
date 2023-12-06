import { Box, Typography } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'

const InternalNav = () => {
  const location = useLocation()

  return (
    <Box display={'flex'} gap={2}>
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}>
        <Typography   sx={{
                  letterSpacing: '0.16px',
                  lineHeight: '22px',
                  fontSize: 'large',
                  ml: 2,
                  fontWeight: location.pathname === '/'  ?  600 : 400,
                  borderRadius: '0px !important',
                  color: location.pathname === '/'  ? '#303030' : '#6a6a6a',
                }} >
          Saldo Base
        </Typography>
      </NavLink>
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/consulta'}>
        <Typography  sx={{
                  letterSpacing: '0.16px',
                  lineHeight: '22px',
                  fontSize: 'large',
                  ml: 2,
                  fontWeight:location.pathname === '/consulta'  ?  600 : 400,
                  borderRadius: '0px !important',
                  color: location.pathname === '/consulta'  ? '#303030' : '#6a6a6a',
                }}  >
          Consulta de Pases
        </Typography>
      </NavLink>

      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/token'}>
        <Typography  sx={{
                  letterSpacing: '0.16px',
                  lineHeight: '22px',
                  fontSize: 'large',
                  ml: 2,
                  fontWeight: location.pathname === '/token'  ?  600 : 400,
                  borderRadius: '0px !important',
                  color: location.pathname === '/token'  ? '#303030' : '#6a6a6a',
                }} >
          Token
        </Typography>
      </NavLink>
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/log'}>
        <Typography  sx={{
                  letterSpacing: '0.16px',
                  lineHeight: '22px',
                  fontSize: 'large',
                  ml: 2,
                  fontWeight: location.pathname === '/log'  ?  600 : 400,
                  borderRadius: '0px !important',
                  color: location.pathname === '/log'  ? '#303030' : '#6a6a6a',
                }} >
          Log de auditoria
        </Typography>
      </NavLink>
    </Box>
  )
}

export default InternalNav