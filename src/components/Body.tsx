import { TableCell, TableRow, Typography } from '@mui/material'
import { memo } from 'react'
const montos = ["valorNominal","monto", "precio", "NroMep"]
export const Body = memo(({ filas, columnas }: any) => (
  <>
    {filas.map((item: any) => (
      <TableRow key={item?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {columnas.map((column: any, index: number) => {
          const value = item[column.id]

          return (
            <TableCell
              sx={{
                position: index === 0 ? 'sticky' : 'relative',
                left: 0,
                cursor: 'pointer',
                textWrap: index === 0 ? 'nowrap' : '',
                borderBottom: '1px solid #BEBEBE',
                background: index === 0 ? "white": "",
                zIndex: index === 0 ? 100000 : 1,
                borderRight :index === 0 ? "2px solid #BEBEBE!important" : ""

                
              }}
              key={item?.id}
            >
              <Typography
                sx={{
                  justifyContent: montos.includes(column.id)  ? "flex-end" :'flex-start',
                  display: 'flex',
                  fontSize: '12px'
                }}
              >
                {value}
              </Typography>
            </TableCell>
          )
        })}
      </TableRow>
    ))}
  </>
))
