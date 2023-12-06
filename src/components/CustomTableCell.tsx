import { TableCell, Box, Typography } from '@mui/material'

interface Props<T> {
  selectedOrderId?: keyof T
  minWidth?: number | string
  id: keyof T
  label: string
  handleOrderMep: (id: keyof T) => void
  cantSelection: boolean
  align: 'center' | 'left' | 'right' | 'justify' | 'inherit' | undefined
}
const boxSX = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
}

const CustomTableCell = <T,>({
  selectedOrderId,
  minWidth = 110,
  id,
  label,
  handleOrderMep,
  cantSelection,
  align = 'center'
}: Props<T>) => {
  return (
    <TableCell align={align} sx={{ padding: '16px', borderBottom: '2px solid black', minWidth: minWidth }}>
      <Box sx={boxSX} justifyContent={align} onClick={() => handleOrderMep(id)}>
        <Typography sx={{ fontWeight: 600 }} variant="body2">
          {label}
        </Typography>

        {selectedOrderId === id ? (
          <Box display={'flex'}>
            <SwitchIcon cantidad={cantSelection} />
          </Box>
        ) : (
          <Box display={'flex'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4042 6.70737C12.2078 6.43088 11.7922 6.43088 11.5958 6.70737L9.09004 10.235C8.86116 10.5573 9.09507 11 9.49419 11H14.5058C14.9049 11 15.1388 10.5573 14.91 10.235L12.4042 6.70737ZM12.4042 17.2926C12.2078 17.5691 11.7922 17.5691 11.5958 17.2926L9.09004 13.765C8.86116 13.4427 9.09507 13 9.49419 13H14.5058C14.9049 13 15.1388 13.4427 14.91 13.765L12.4042 17.2926Z"
                fill="#2B2B2B"
              />
            </svg>
          </Box>
        )}
      </Box>
    </TableCell>
  )
}

const SwitchIcon = ({ cantidad }: { cantidad: boolean }) => {
  if (!cantidad)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.69 8.868a.831.831 0 0 0-1.38 0l-3.65 5.26c-.402.566 0 1.372.69 1.372h7.3c.69 0 1.092-.806.69-1.372l-3.65-5.26Z"
          fill="#2b2b2b"
        ></path>
      </svg>
    )
  else
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.81 15.632a.831.831 0 0 0 1.38 0l3.65-5.26c.402-.566 0-1.372-.69-1.372h-7.3c-.69 0-1.092.806-.69 1.372l3.65 5.26Z"
          fill="#2b2b2b"
        ></path>
      </svg>
    )
}
export default CustomTableCell
