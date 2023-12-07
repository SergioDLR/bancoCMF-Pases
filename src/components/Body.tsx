import { TableCell, TableRow, Typography } from '@mui/material'
import { memo } from 'react'

export const Body = memo(({ filas, columnas }: any) => {
  const Row = ({ item }: any) => {
    return (
      <TableRow key={item?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {columnas.map((column: any) => {
          const value = item[column.id]

          return (
            <TableCell key={item?.id}>
              <Typography variant={'caption'}>{value}</Typography>
            </TableCell>
          )
        })}
      </TableRow>
    )
  }

  return (
    <>
      {filas.map((item: any) => (
        <Row item={item} />
      ))}
    </>
  )
})
