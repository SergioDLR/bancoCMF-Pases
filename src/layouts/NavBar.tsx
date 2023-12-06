import { Box, useTheme, Typography, Avatar, Chip, AppBar, Toolbar } from '@mui/material'
import logoCed from '../assets/images/cedst.png'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import InternalNav from './InterNav'
const NavBar = () => {
  const { palette } = useTheme()

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: palette.primary.light
      }}
      // display={'flex'}
      //bgcolor={palette.primary.light}
      // paddingY={1}
      // paddingX={2}
      // alignItems={'center'}
      // justifyContent={'space-between'}
    >
      {/* <Typography variant={'h4'} color={'white'}>
        Sistema Pases BCRA

      </Typography> */}

      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}
      >
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <AccountBalanceIcon sx={{ color: 'white' }}></AccountBalanceIcon>
          <Typography color={'white'}>BANCO S.A.</Typography>
        </Box>
        <InternalNav />

        <Box display={'flex'} alignItems={'center'} gap={6}>
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
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
