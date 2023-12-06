import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Typography,
  TextField,
  Checkbox,
  Autocomplete,
  Container,
  Button,
  Modal,
  Fade,
  Backdrop,
  Card,
  IconButton
} from '@mui/material'
import CustomTableCell from '../../components/CustomTableCell'
import { useState } from 'react'
import useOrderData from '../../hooks/useOrderData'
import moneyParse from '../../utils/moneyParse'
import CloseIcon from '@mui/icons-material/Close'

interface FilaLog {
  id: number
  fecha: string
  saldoBase: number
  saldoBaseBcra: number
  evento: 'Adhesion' | 'Desadhesion' | 'Anular'
  estado: string
  usuario: string
}
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4
}

const FilasInicial: FilaLog[] = [
  {
    id: 1,
    fecha: '10/10/2023 09:55:13',
    saldoBase: 0,
    saldoBaseBcra: 0,
    evento: 'Adhesion',
    estado: 'Registro de aceptacion BCRA',
    usuario: 'l122 (Sergio López)'
  },
  {
    id: 2,
    fecha: '11/10/2023 14:12:59',
    saldoBase: 1002000.1,
    saldoBaseBcra: 1002000.1,
    evento: 'Desadhesion',
    estado: 'Pendiente de Envío',
    usuario: 'l123 (Ignacio Fernandez)'
  },
  {
    id: 3,
    fecha: '13/10/2023 11:25:05',
    saldoBase: 1002000.1,
    saldoBaseBcra: 1002000.1,
    evento: 'Desadhesion',
    estado: 'Pendiente de Autorizacion',
    usuario: 'l123 (Ignacio Fernandez)'
  },
  {
    id: 4,
    fecha: '15/10/2023 17:45:15',
    saldoBase: 0,
    saldoBaseBcra: 1302000.1,
    evento: 'Anular',
    estado: 'Anulada',
    usuario: 'l122 (Sergio López)'
  },
  {
    id: 5,
    fecha: '17/10/2023 12:35:05',
    saldoBase: 0,
    saldoBaseBcra: 11002000.1,
    evento: 'Adhesion',
    estado: 'Pendiente de Envío',
    usuario: 'l122 (Sergio López)'
  }
]

interface User {
  idUsuario: string
  nombre: string
}

const users: User[] = [
  { idUsuario: 'l122', nombre: 'Sergio López' },
  { idUsuario: 'l123', nombre: 'Ignacio Fernandez' }
]

interface Eventos {
  descr: string
}

const eventos: Eventos[] = [
  {
    descr: 'Adhesion'
  },
  {
    descr: 'Desadhesion'
  },
  {
    descr: 'Anular'
  }
]

interface Estado {
  descr: string
}

const estados: Estado[] = [
  {
    descr: 'Registro de aceptacion BCRA'
  },
  {
    descr: 'Pendiente de Envío'
  },
  {
    descr: 'Pendiente de Autorizacion'
  },
  {
    descr: 'Anulada'
  }
]

const LogAuditoriaContainer = () => {
  const [filas, setFilas] = useState<FilaLog[]>(FilasInicial)
  const { isAscending, selectedOrderId, handleOrderMeps } = useOrderData({ setData: setFilas })
  const [open, setOpen] = useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Container maxWidth={'xl'}>
      <Card variant="outlined">
        <Box p={2}>
          <Box>
            <Typography variant={'h4'}>Auditoría</Typography>
            <Typography variant={'h6'}>Periodo</Typography>
            <Box display={'flex'} gap={2}>
              <Box>
                <Typography>Fecha desde</Typography>
                <TextField type="date" name="fechaDesde" />
              </Box>
              <Box>
                <Typography>Fecha hasta</Typography>
                <TextField type="date" name="fechaHasta" />
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography>Usuario(s)</Typography>
            <Autocomplete
              id="selec-users"
              options={users}
              autoHighlight
              noOptionsText={'No hay opciones'}
              multiple
              disableCloseOnSelect
              getOptionLabel={(option: User) => option.nombre}
              ChipProps={{ color: 'primary' }}
              renderOption={(props, option, { selected }) => (
                <Box component="li" {...props} value={option.nombre}>
                  <Checkbox checked={selected} /> {option.nombre}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps
                  }}
                />
              )}
            />
          </Box>
          <Box mt={2}>
            <Typography>Evento(s)</Typography>
            <Autocomplete
              id="selec-users"
              options={eventos}
              autoHighlight
              noOptionsText={'No hay opciones'}
              multiple
              disableCloseOnSelect
              getOptionLabel={(option: Eventos) => option.descr}
              ChipProps={{ color: 'primary' }}
              renderOption={(props, option, { selected }) => (
                <Box component="li" {...props} value={option.descr}>
                  <Checkbox checked={selected} /> {option.descr}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps
                  }}
                />
              )}
            />
          </Box>
          <Box mt={2}>
            <Typography>Estado(s)</Typography>
            <Autocomplete
              id="selec-users"
              options={estados}
              autoHighlight
              noOptionsText={'No hay opciones'}
              multiple
              disableCloseOnSelect
              getOptionLabel={(option: Estado) => option.descr}
              ChipProps={{ color: 'primary' }}
              renderOption={(props, option, { selected }) => (
                <Box component="li" {...props} value={option.descr}>
                  <Checkbox checked={selected} /> {option.descr}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps
                  }}
                />
              )}
            />
          </Box>
          <Box my={2} display={'flex'} justifyContent={'flex-end'}>
            <Button variant={'outlined'} onClick={() => setOpen(true)}>
              Filtrar
            </Button>
          </Box>
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
                <Box display={'flex'} mb={2} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography variant={'h6'}>Resultados</Typography>
                  <IconButton onClick={handleClose}>
                    <CloseIcon></CloseIcon>
                  </IconButton>
                </Box>

                <TableContainer
                  sx={{
                    border: '2px solid black'
                  }}
                >
                  <Table stickyHeader>
                    <TableHead>
                      <CustomTableCell
                        align={'left'}
                        cantSelection={isAscending}
                        id={'id'}
                        label={'Id'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'left'}
                        cantSelection={isAscending}
                        id={'fecha'}
                        label={'Fecha'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'right'}
                        cantSelection={isAscending}
                        id={'saldoBase'}
                        label={'Saldo Base'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'right'}
                        cantSelection={isAscending}
                        id={'saldoBaseBcra'}
                        label={'Saldo Base BCRA'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'left'}
                        cantSelection={isAscending}
                        id={'evento'}
                        label={'Evento'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'left'}
                        cantSelection={isAscending}
                        id={'estado'}
                        label={'Estado'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                      <CustomTableCell
                        align={'left'}
                        cantSelection={isAscending}
                        id={'usuario'}
                        label={'Usuario'}
                        handleOrderMep={handleOrderMeps}
                        selectedOrderId={selectedOrderId}
                      />
                    </TableHead>
                    <TableBody>
                      {filas.map((f) => (
                        <TableRow key={f.id}>
                          <TableCell>{f.id}</TableCell>
                          <TableCell>{f.fecha}</TableCell>
                          <TableCell align={'right'}>{moneyParse(f.saldoBase)}</TableCell>
                          <TableCell align={'right'}>{moneyParse(f.saldoBaseBcra)}</TableCell>
                          <TableCell>{f.evento}</TableCell>
                          <TableCell>{f.estado}</TableCell>
                          <TableCell>{f.usuario}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Card>
    </Container>
  )
}

export default LogAuditoriaContainer
