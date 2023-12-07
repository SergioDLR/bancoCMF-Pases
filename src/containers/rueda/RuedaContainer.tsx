import {
  Box,
  Button,
  Card,
  Fade,
  Typography,
  Modal,
  Backdrop,
  TextField,
  LinearProgress,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
  Skeleton,
  Grid,
  IconButton,
  Divider
} from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay'
import { useState, useEffect } from 'react'
import moneyParse from '../../utils/moneyParse'
import { toast } from 'react-toastify'
import Adhesion from './Adhesion'
import Authorizar from '../../components/Authorizar'
import dayjs from 'dayjs'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

interface IRequest {
  estado: string
  saldo: string
  usuario: string
  operacion: string
}
const saldoCuenta = 10000000000
const RuedaContainer = () => {
  const [open, setOpen] = useState(false)
  const [openModif, setOpenModif] = useState(false)
  //const [saldo, setSaldo] = useState('')
  const [openAnular, setOpenAnular] = useState(false)

  const [loadingResp, setLoadingResp] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [openAuth, setOpenAuth] = useState(false)
  const [request, setRequest] = useState<IRequest>({} as IRequest)
  const handleSubscrib = (saldoR: string) => {
    setOpen(false)
    setRequest({
      estado: 'Pendiente autorizacion',
      saldo: saldoR,
      usuario: 'L146789 (Fernandez, Ignacio)',
      operacion: 'adherir'
    })
  }

  const handleUnSubscrib = () => {
    setOpenBaja(false)
    setRequest({
      estado: 'Pendiente autorizacion',
      saldo: '-',
      usuario: 'L146789 (Fernandez, Ignacio)',
      operacion: 'desadherir'
    })
  }

  const handleCloseAuth = () => {
    setOpenAuth(false)
  }

  const [saldoEnRueda, setSaldoEnRueda] = useState<string | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const autorizar = () => {
    setOpenAuth(false)
    toast.success('Autorizada', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

    setRequest({
      estado: 'Autorizada - Esperando Respuesta BCRA',
      saldo: request.saldo,
      usuario: 'L146789',
      operacion: request.operacion
    })
    setLoadingResp(true)
    if (request.operacion === 'desadherir') {
      setTimeout(() => {
        setRequest({
          estado: 'BCRA: Aceptada',
          saldo: '-',
          usuario: 'L146789 (Fernandez, Ignacio)',
          operacion: request.operacion
        })
        setLoadingResp(false)
        setSaldoEnRueda(null)
        toast.success('Aprobada por BCRA', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }, 10000)
    } else {
      setTimeout(() => {
        setRequest({
          estado: 'BCRA: Aceptada',
          saldo: request.saldo,
          usuario: 'L146789 (Fernandez, Ignacio)',
          operacion: request.operacion
        })
        setLoadingResp(false)

        setSaldoEnRueda(request.saldo)
        toast.success('Aprobada por BCRA', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      }, 10000)
    }
  }
  const refetchData = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  const [openBaja, setOpenBaja] = useState(false)
  return (
    <Box mt={3} mb={6}>
      <Card variant="outlined" sx={{ height: '75px', marginY: 2 }}>
        <Box p={2} alignItems={'center'} display={'flex'}>
          <Typography variant={'body1'} color={'secondary'}>
            Ultima sincronización {dayjs().format('DD/MM/YYYY - HH:mm')}
          </Typography>
          <Box>
            <IconButton onClick={refetchData}>
              <ReplayIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
      <Box display="flex" gap={2} flexDirection={{ xs: 'column', lg: 'row' }} minHeight={'110px'}>
        <Card variant="outlined" sx={{ width: '100%' }}>
          <Box>
            {!loading ? (
              <Box paddingY={2} paddingX={3}>
                {saldoEnRueda ? (
                  <Box>
                    <Typography textAlign={'end'} variant="h6">
                      Saldo Base
                    </Typography>
                    <Typography textAlign={'end'} variant="h5">
                      $ {saldoEnRueda}
                    </Typography>
                  </Box>
                ) : (
                  <Typography textAlign={'end'} variant="h6">
                    No se posee saldo de alta.
                  </Typography>
                )}

                <Typography sx={{ fontStyle: 'italic' }} textAlign={'end'} variant="body1">
                  API Pases
                </Typography>
                <Divider />
                <Box display={'flex'}>
                  {saldoEnRueda ? (
                    <Box marginLeft={'auto'} gap={1} display={'flex'} mt={2}>
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => setOpenBaja(true)}
                        disabled={Boolean(request.saldo)}
                      >
                        <Typography variant="overline">desadherir</Typography>
                      </Button>
                      <Button variant="text" size="small" onClick={handleOpen} disabled={Boolean(request.saldo)}>
                        <Typography variant="overline">Modificar</Typography>
                      </Button>
                    </Box>
                  ) : (
                    <Box marginLeft={'auto'} gap={1} display={'flex'} mt={2}>
                      <Button variant="text" size="small" onClick={handleOpen} disabled={Boolean(request.saldo)}>
                        <Typography variant="overline">Adherir</Typography>
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            ) : (
              <Box paddingY={2} paddingX={3}>
                <Typography textAlign={'end'} variant="h6">
                  Saldo Base
                </Typography>
                <Skeleton sx={{ marginLeft: 'auto' }} height={'50px'} width={'120px'} animation={'wave'} />
              </Box>
            )}
          </Box>
        </Card>

        <Card variant="outlined" sx={{ width: '100%' }}>
          <Box display={'flex'} alignItems={'flex-end'} flexDirection={'column'}>
            {!loading ? (
              <Box paddingY={2} paddingX={2}>
                <Typography textAlign={'end'} variant="h6">
                  Saldo Cuenta en Pesos
                </Typography>
                <Typography textAlign={'end'} variant="h5">
                  $ {moneyParse(saldoCuenta)}
                </Typography>

                <Typography sx={{ fontStyle: 'italic' }} textAlign={'end'} variant="body1">
                  API Mep
                </Typography>
              </Box>
            ) : (
              <Box paddingY={2} paddingX={2}>
                <Typography textAlign={'end'} variant="h6">
                  Saldo Cuenta en Pesos
                </Typography>
                <Skeleton sx={{ marginLeft: 'auto' }} height={'50px'} width={'120px'} animation={'wave'} />
              </Box>
            )}
          </Box>
        </Card>

        <Card variant="outlined" sx={{ width: '100%' }}>
          <Box display={'flex'} alignItems={'flex-end'} flexDirection={'column'}>
            {!loading ? (
              <Box paddingY={2} paddingX={2}>
                <Typography textAlign={'end'} variant="h6">
                  Disponible para pases
                </Typography>
                <Typography variant="h5" textAlign={'end'}>
                  ${' '}
                  {saldoEnRueda
                    ? moneyParse(saldoCuenta - parseFloat(saldoEnRueda.replaceAll('.', '').replace(',', '.') ?? '0'))
                    : 0}
                </Typography>
              </Box>
            ) : (
              <Box paddingY={2} paddingX={2}>
                <Typography variant="h6">Disponible para pases</Typography>
                <Skeleton sx={{ marginLeft: 'auto' }} height={'50px'} width={'120px'} animation={'wave'} />
              </Box>
            )}
          </Box>
        </Card>
      </Box>

      <Grid container>
        {request.estado ? (
          <Grid item xs={8}>
            <Box mt={2}>
              <Typography>Operatorias Activas</Typography>

              <Box mt={2} width={{ xs: '600px', lg: '800px' }}>
                {loadingResp ? <LinearProgress /> : null}
                <Card variant="outlined">
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Estado</TableCell>
                          <TableCell>Tipo</TableCell>
                          <TableCell>Usuario</TableCell>
                          {request.operacion == 'adherir' ? <TableCell align="right">Monto</TableCell> : null}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography>{request.estado}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{ fontStyle: 'italic' }}
                              color={request.operacion == 'adherir' ? 'green' : 'red'}
                            >
                              {request.operacion.toUpperCase()}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {' '}
                            <Typography sx={{ fontStyle: 'italic' }} variant="body1">
                              {request.usuario}
                            </Typography>
                          </TableCell>

                          {request.operacion == 'adherir' ? (
                            <TableCell align="right">
                              {' '}
                              <Typography>$ {request.saldo}</Typography>{' '}
                            </TableCell>
                          ) : null}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Box paddingY={2} paddingX={3}>
                    <Box display={'flex'} gap={2} justifyContent={'flex-end'}>
                      {request.estado !== 'BCRA: Aceptada' ? (
                        <>
                          <Button onClick={() => setOpenAnular(true)} disabled={loadingResp}>
                            <Typography variant="overline">Anular</Typography>
                          </Button>
                          {request.operacion === 'adherir' ? (
                            <Button onClick={handleOpen} disabled={loadingResp}>
                              <Typography variant="overline">Modificar</Typography>
                            </Button>
                          ) : null}

                          <Button onClick={() => setOpenAuth(true)} disabled={loadingResp}>
                            <Typography variant="overline">Autorizar</Typography>
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setRequest({} as any)}>
                          <Typography variant="overline">Continuar</Typography>
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={8} />
        )}
      </Grid>

      <Adhesion open={open} handleClose={handleClose} handleSubscrib={handleSubscrib} saldoCuenta={saldoCuenta} />

      <Modal
        open={openModif}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={openModif}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Modificar
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Modificar monto: ${request.saldo}
            </Typography>
            <TextField
              placeholder={'Monto'}
              //onChange={(evt) => setSaldo(evt.target.value)}
              //onBlur={()=>setRequest({ saldo: moneyParse(parseFloat(saldo.replaceAll(',', '') ?? 0), 'ARP') })}
            />
            <Box display={'flex'} justifyContent={'flex-end'} mt={5} gap={1}>
              <Button onClick={() => setOpenModif(false)} variant={'contained'}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  //handleSubscrib()
                  setOpenModif(false)
                }}
              >
                Modificar
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openAnular}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={openAnular}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Modificar
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              ¿Anular operacion?
            </Typography>
            <Box display={'flex'} justifyContent={'flex-end'} mt={5} gap={1}>
              <Button onClick={() => setOpenAnular(false)} variant={'contained'}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  setOpenAnular(false)
                  setRequest({} as any)
                }}
              >
                Anular
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openBaja}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={openBaja}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Baja
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Se daran de baja ${saldoEnRueda ?? ''}
            </Typography>

            <Box display={'flex'} justifyContent={'flex-end'} mt={5} gap={1}>
              <Button onClick={() => setOpenBaja(false)} variant={'contained'}>
                Cancelar
              </Button>
              <Button onClick={handleUnSubscrib}>Desadherir</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Authorizar
        open={openAuth}
        handleClose={handleCloseAuth}
        handleSubscrib={autorizar}
        req={request}
        saldoEnRueda={saldoEnRueda}
        saldoCuenta={saldoCuenta}
      />

      <Card variant={'outlined'} sx={{ marginTop: 2 }}>
        <Box p={2}>
          <Typography>
            (*) Este sistema permite a las Entidades Financieras indicar el Saldo Base que se desee conservar en su
            cuenta corriente, afectándose el saldo restante a la generación de un Pase Pasivo de rueda BCRA. El saldo
            base podrá modificarse cuando se considere necesario o bien darse de baja cuando no se desee participar en
            la mencionada rueda de Pases Pasivos. Rige eta operatoria la Com "B" 12602.
          </Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default RuedaContainer
