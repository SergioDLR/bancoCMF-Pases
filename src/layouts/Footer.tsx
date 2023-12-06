import { Box, Container, Typography, useTheme } from '@mui/material'

const Footer = () => {
  const { palette } = useTheme()
  return (
    <Box bgcolor={palette.primary.main} width={'100%'} position={'fixed'} bottom={0} paddingY={1}>
      <Container maxWidth={'xl'}>
        <Typography color="white">Estado Token: Vigente - Vencimiento 09/12/2023 18:22</Typography>
      </Container>
    </Box>
  )
}

export default Footer
