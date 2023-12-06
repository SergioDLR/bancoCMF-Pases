import { Fade, Box, Typography, TextField, Button, Modal, Backdrop, InputAdornment } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useState } from 'react'
import moneyParse from '../../utils/moneyParse'
interface IProps {
  open: boolean
  handleClose: () => void
  handleSubscrib: (saldoR: string) => void
  saldoCuenta: number
}

const Adhesion = ({ open, handleClose, handleSubscrib, saldoCuenta }: IProps) => {
  const [saldo, setSaldo] = useState('0')
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

  const onBlurEffect = () => {
    setSaldo(moneyParse(parseFloat(saldo.replaceAll('.', '').replace(',', '.') ?? 0), 'ARP'))
  }

  const handleChange = (evt: any) => {
    const regex = /[a-zA-Z]+/

    if (evt.nativeEvent.data != null && regex.test(evt.nativeEvent.data)) return
    if (evt.target.value === '') return setSaldo('0')
    setSaldo(evt.target.value)
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
            Adherir a la rueda
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Ingrese un monto
          </Typography>
          <TextField
            placeholder={'Monto'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              )
            }}
            value={saldo}
            inputProps={{ sx: { textAlign: 'end' } }}
            onBlur={onBlurEffect}
            onChange={handleChange}
            fullWidth
          />
          <Typography textAlign={'end'}>
            <Typography variant={'caption'}>Saldo cuenta $ {moneyParse(saldoCuenta, 'ARP')}</Typography>{' '}
          </Typography>
          {parseFloat(saldo.replaceAll('.', '').replace(',', '.')) > saldoCuenta ? (
            <Typography variant={'body1'}>El numero ingresado es mas alto que el saldo disponible</Typography>
          ) : null}

          <Box display={'flex'} justifyContent={'flex-end'} mt={5} gap={1}>
            <Button onClick={handleClose} variant={'contained'}>
              Cancelar
            </Button>
            <Button
              disabled={parseFloat(saldo.replaceAll('.', '').replace(',', '.')) > saldoCuenta}
              onClick={() => handleSubscrib(saldo)}
            >
              Confirmar
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default Adhesion
