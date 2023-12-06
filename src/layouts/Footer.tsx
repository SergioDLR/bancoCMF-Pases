import { Box, Typography, useTheme } from '@mui/material'

const Footer = () => {
  const { palette } = useTheme()
  return (
    <Box bgcolor={palette.primary.main} width={'100%'} position={'fixed'} bottom={0} p={1} paddingX={4}>
      <Typography color="white" sx={{ fontWeight: 600 }}>
        Estado Token: Vigente
      </Typography>
      <Typography sx={{ fontWeight: 600 }} color="white">
        Vencimiento 09/12/2023 18:22
      </Typography>
    </Box>
  )
}

export default Footer
