import { Box, Avatar, Chip, AppBar, Toolbar, Container, Typography, Button } from '@mui/material'
import logoCed from '../assets/images/cedst.png'
import bancoCmfLogo from '../assets/images/logo-cmf.png'
import InternalNav from './InterNav'
const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            paddingY: 1
          }}
        >
          <Container maxWidth={'xl'}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <Box component={'img'} src={bancoCmfLogo} width={'192px'} height={'50px'} />
              <InternalNav />
            </Box>

            {/*   <Box display={'flex'} alignItems={'center'} gap={6}>
          <Box
            component="img"
            sx={{
              height: 40,
              width: 120,
              maxHeigt: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 }
            }}
            alt="Cedeira Logo"
            src={logoCed}
          />
          <Chip
            color="info"
            avatar={<Avatar sx={{ bgcolor: 'white' }}>IF</Avatar>}
            label="Fernandez, Ignacio  L146798"
          />
          </Box> */}
          </Container>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{}} variant="dense">
          <Container maxWidth={'xl'}>
            <Box display={'flex'} gap={1}>
              <Avatar sx={{ width: 24, height: 24 }} variant="square">
                <Typography color={'secondary'}>IF</Typography>
              </Avatar>
              <Typography>Ignacio Fernandez (L9872)</Typography>
              <Button color="info" variant="text" size="small">
                <Typography variant="caption">Cerrar sesión</Typography>
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
