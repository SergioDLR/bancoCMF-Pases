import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'

import FilterIcon from '../../assets/FilterIcon'
import ReloadIcon from '../../assets/ReloadIcon'
import { TabletMain } from '../../components/Tablet'
import { Body } from '../../components/Body'
import moneyParse from '../../utils/moneyParse'


// const filas = [
//   {
//     TipoPase: 'pasivo',
//     Rueda: 'Repo',
//     TipoOperacion: 'Vencimiento',
//     Concertacion: '10/10/2023',
//     Nombre: 'Letras de liquidez'
//   },
//   {
//     TipoPase: 'pasivo',
//     Rueda: 'Repo',
//     TipoOperacion: 'Vencimiento',
//     Concertacion: '10/10/2023',
//     Nombre: 'Letras de liquidez'
//   },
//   {
//     TipoPase: 'pasivo',
//     Rueda: 'Repo',
//     TipoOperacion: 'Vencimiento',
//     Concertacion: '10/10/2023',
//     Nombre: 'Letras de liquidez'
//   },
//   {
//     TipoPase: 'pasivo',
//     Rueda: 'Repo',
//     TipoOperacion: 'Vencimiento',
//     Concertacion: '10/10/2023',
//     Nombre: 'Letras de liquidez'
//   },
//   {
//     TipoPase: 'pasivo',
//     Rueda: 'Repo',
//     TipoOperacion: 'Vencimiento',
//     Concertacion: '10/10/2023',
//     Nombre: 'Letras de liquidez'
//   }
// ]
const exclude =[ 'codigoTipoOperacion'
  , 'codigoOperacion'
  , 'numerosiopel', "rueda", "codigoEntidad", "nombreEntidad"]
const respuesta = {
  "metadata": {
      "resultset": {
          "count": 1,
          "offset": 0,
          "limit": 1000
      }
  },
  "pases": [
      {
          "concertacion": {
              "tipo": "Pasivo",
              "rueda": "REPO",
              "codigoTipoOperacion": 1,
              "tipoOperacion": "CONCERTACIÓN",
              "codigoOperacion": "113",
              "numeroSiopel": "22031002870",
              "Concertacion": "10/3/2020",
              "Liquidacion": "10/3/2020",
              "codigoEspecie": "13793",
              "nombreEspecie": "LETRAS DE LIQUIDEZ",
              "plazo": 0,
              "moneda": "ARS",
              "tasa": 33.5,
              "valorNominal":  moneyParse(13729000, "ARS") ,
              "precio": 0.72837,
              "monto": moneyParse(99997730, "ARS"),
              "codigoEntidad": "777",
              "nombreEntidad": "Banco CedeiraSF",
              "cuentaAgente": "777",
              "EstadoLiq": "Pendiente",
              "NroMep": "75932"
          },
          "vencimiento": {
              "tipo": "Pasivo",
              "rueda": "REPO",
              "codigoTipoOperacion": 2,
              "tipoOperacion": "VENCIMIENTO",
              "codigoOperacion": "113",
              "numeroSiopel": "22031002870",
              "Concertacion": "10/3/2020",
              "Liquidacion": "11/3/2020",
              "codigoEspecie": "13793",
              "nombreEspecie": "LETRAS DE LIQUIDEZ",
              "plazo": 1,
              "moneda": "ARS",
              "tasa": 33.5,
              "valorNominal": moneyParse(13729000, "ARS") ,
              "precio": 0.729038972603,
              "monto": moneyParse(10008969621.04, "ARS"),
              "codigoEntidad": "777",
              "nombreEntidad": "Banco CedeiraSF",
              "cuentaAgente": "777",
              "EstadoLiq": "Pendiente",
              "NroMep": "759321"
          }
      }
  ]
}
const columnas = Object.keys(respuesta.pases[0].concertacion).map((i:any)=> ({id: i.replace("fecha",""), label: i.replace("fecha","")})).filter((i)=>!exclude.includes(i?.id))

const filas = [respuesta.pases[0].concertacion, respuesta.pases[0].vencimiento, respuesta.pases[0].vencimiento ]
export const PasesConsulta = () => {
  const [pagina, setPagina] = useState(1)
console.log(Object.values(respuesta.pases))
  const handlePaginas = (pagina: number = 1) => {
    setPagina(pagina)
  }
  return (
    <Box>
      <Box display="flex">
        <Button
          onClick={() => pagina !== 1 && handlePaginas(1)}
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            fontSize: '16px',
            ml: 2,
            borderBottom: pagina === 1 ? '3px solid #1976d2' : 'none',
            borderRadius: '0px !important',
            color: pagina === 1 ? 'black' : '#2B2B2B'
          }}
          variant="text"
        >
          Pases
        </Button>
        <Button
          onClick={() => pagina !== 2 && handlePaginas(2)}
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            fontSize: '16px',
            ml: 2,
            borderBottom: pagina === 2 ? '3px solid #1976d2' : 'none',
            borderRadius: '0px !important',
            color: pagina === 2 ? 'black' : '#2B2B2B'
          }}
          variant="text"
        >
          Concertaciones
        </Button>
        <Button
          onClick={() => pagina !== 3 && handlePaginas(3)}
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            fontSize: '16px',
            ml: 2,
            borderBottom: pagina === 3 ? '3px solid #1976d2' : 'none',
            borderRadius: '0px !important',
            color: pagina === 3 ? 'black' : '#2B2B2B'
          }}
          variant="text"
        >
          Vencimientos
        </Button>
        <Button
          onClick={() => pagina !== 4 && handlePaginas(4)}
          sx={{
            letterSpacing: '0.16px',
            lineHeight: '22px',
            fontSize: '16px',
            ml: 2,
            borderBottom: pagina === 4 ? '3px solid #1976d2' : 'none',
            borderRadius: '0px !important',
            color: pagina === 4 ? 'black' : '#2B2B2B'
          }}
          variant="text"
        >
          Eventos por fechas
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          mt: 3,
          mb: 3,
          display: 'flex',
          justifyContent: 'start',
          gap: 2,
          alignItems: 'center'
        }}
      >
        <TextField
          label="Fecha desde:"
          type="date"
          defaultValue={new Date()}
          sx={{
            width: 160,
            '&svg': {
              display: 'block',
              color: '#444140 !important',
              background: 'black'
            },
            color: '#444140 !important'
          }}
          name="fechaDsd"
          placeholder="desde"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label="Fecha hasta:"
          type="date"
          defaultValue={new Date()}
          name="fechaHst"
          sx={{ width: 160 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">{/* <CalendarMonthIcon /> */}</InputAdornment>
          }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl sx={{ width: '200px' }}>
          <InputLabel id="demo-simple-select-label">Tipo de pase</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={'Pasivo'} label="Tipo de pase">
            <MenuItem value={'Activo'}>Activo</MenuItem>
            <MenuItem value={'Pasivo'}>Pasivo</MenuItem>
          </Select>
        </FormControl>
        <FormGroup
          sx={{
            padding: ' 7px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '4px'
          }}
        >
          <FormControlLabel control={<Checkbox defaultChecked />} label="Solo liquidadas" />
        </FormGroup>
        <Button variant="contained">Buscar</Button>

        <Button variant="outlined">Exportar</Button>
        <Button variant={'outlined'} size={'large'} color={'primary'}>
          <Typography marginRight={1} color={'primary'}>
            Filtros{' '}
          </Typography>
          <FilterIcon />
        </Button>
        <IconButton>
          <ReloadIcon />
        </IconButton>
      </Box>

      <TabletMain filas={filas} columnas={columnas} Body={Body} acciones={false} checked={false} />
    </Box>
  )
}
