import { Box, Typography } from '@mui/material'
import { NavLink, useLocation } from 'react-router-dom'

const InternalNav = () => {
  const location = useLocation()

  return (
    <Box display={'flex'} gap={2} marginLeft="auto">
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}>
        <Typography
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            ml: 2,
            borderRadius: '0px !important',
            borderBottom: location.pathname === '/' ? ' 1px solid ' : ''
          }}
        >
          SALDO BASE
        </Typography>
      </NavLink>
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/consulta'}>
        <Typography
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            ml: 2,
            borderRadius: '0px !important',
            borderBottom: location.pathname === '/consulta' ? ' 1px solid ' : ''
          }}
        >
          CONSULTA
        </Typography>
      </NavLink>

      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/token'}>
        <Typography
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            ml: 2,
            borderRadius: '0px !important',
            borderBottom: location.pathname === '/token' ? ' 1px solid ' : ''
          }}
        >
          TOKEN
        </Typography>
      </NavLink>
      <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/log'}>
        <Typography
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            ml: 2,
            borderRadius: '0px !important',
            borderBottom: location.pathname === '/log' ? ' 1px solid ' : ''
          }}
        >
          AUDITORÍA
        </Typography>
      </NavLink>
    </Box>
  )
}

export default InternalNav
