import { Typography, Card, Box } from '@mui/material'

const TokenContainer = () => {
  return (
    <Card variant={'outlined'}>
      <Box p={2}>
        <Typography sx={{ fontStyle: 'italic' }}>Estado Token: Vigente</Typography>
        <Typography sx={{ fontStyle: 'italic' }}>Vencimiento 23/08/2023 18:22</Typography>
      </Box>
    </Card>
  )
}

export default TokenContainer
