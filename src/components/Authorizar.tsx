import {
  Fade,
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card
} from '@mui/material'

import moneyParse from '../utils/moneyParse'
interface IProps {
  open: boolean
  handleClose: () => void
  handleSubscrib: () => void
  req: any
  saldoEnRueda: string | null
  saldoCuenta: number
}

const Authorizar = ({ open, handleClose, handleSubscrib, req, saldoEnRueda, saldoCuenta }: IProps) => {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Autorizar {req?.operacion}
          </Typography>
          <Card variant={'outlined'}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Afecta saldo a partir de</TableCell>
                    <TableCell align="right">Disponible para pases</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Actual</TableCell>
                    <TableCell align="right"> {saldoEnRueda === null ? 'No adherido' : `$ ${saldoEnRueda}`}</TableCell>
                    <TableCell align="right">
                      {saldoEnRueda !== null
                        ? `$ ${moneyParse(
                            saldoCuenta - parseFloat(saldoEnRueda.replaceAll('.', '').replace(',', '.') ?? '0')
                          )}`
                        : '$ 0'}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Proximo</TableCell>
                    <TableCell align="right">
                      {req?.operacion === 'desadherir' ? (
                        <Typography color={'red'} variant="overline">
                          desadherir
                        </Typography>
                      ) : (
                        `$ ${req.saldo}`
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {req?.operacion === 'desadherir'
                        ? '$ 0'
                        : `$ ${moneyParse(
                            saldoCuenta - parseFloat(req?.saldo?.replaceAll('.', '').replace(',', '.') ?? '0')
                          )}`}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
          <Box display={'flex'} justifyContent={'flex-end'} mt={5} gap={1}>
            <Button onClick={handleClose} variant={'contained'}>
              Cancelar
            </Button>
            <Button onClick={handleSubscrib}>Autorizar</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default Authorizar
