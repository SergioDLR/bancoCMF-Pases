import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'

export const TabletMain = ({
  filas,
  columnas,
  Body,
  acciones = false,
  checked = false,
  footer = true,
  minHeight = false,
  minWidth = false
}: any) => {
  // datos son las filas pero ya con el ordenamiento
  const [datos, setDatos] = useState<any[]>([])
  // selected son los cambos de checkbox "aun falta"
  //const [selected, setSelected] = useState<readonly string[]>( [] );
  //controla el paginado
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  // controla el ordenamiento, columna que se usa y asc o desc
  const [columnaOrdenada, setColumnaOrdenada] = useState<string | null>(null)
  const [ordenAscendente, setOrdenAscendente] = useState<boolean>(true)
  //-------- ordenamiento, preparado para texto, fecha y numero  -----
  // ------- no se tiene que informar el tipo de dato el algoritmo lo comprueba ---------
  const verificacionNumero = (input: string) => typeof parseFloat(input) === 'number'
  const ordenarPorColumna = (columna: any) => {
    let orden = ordenAscendente

    if (columna === columnaOrdenada) {
      orden = !orden
    } else {
      orden = true
    }

    const datosOrdenados = [...datos].sort((a, b) => {
      const valorA: any = a[columna]
      const valorB: any = b[columna]

      if (verificacionNumero(valorA) && verificacionNumero(valorB)) {
        return orden ? parseFloat(valorA) - parseFloat(valorB) : parseFloat(valorB) - parseFloat(valorA)
      } else if (esFecha(valorA) && esFecha(valorB)) {
        const fechaA = new Date(valorA)
        const fechaB = new Date(valorB)
        return orden ? fechaA.getTime() - fechaB.getTime() : fechaB.getTime() - fechaA.getTime()
      } else {
        const textoA = String(valorA).toLowerCase()
        const textoB = String(valorB).toLowerCase()
        if (textoA < textoB) {
          return orden ? -1 : 1
        }
        if (textoA > textoB) {
          return orden ? 1 : -1
        }
        return 0
      }
    })

    setDatos(datosOrdenados)
    setColumnaOrdenada(columna)
    setOrdenAscendente(orden)
  }

  const esFecha = (valor: any): boolean => {
    const formatoFecha = /^\d{4}-\d{2}-\d{2}$/
    return formatoFecha.test(valor)
  }
  useEffect(() => {
    setDatos(filas)
  }, [filas])
  useEffect(() => {
    setDatos(filas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
  }, [page, rowsPerPage, filas])
  //----------------------Controla la paginacion -------------

  const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  //-------------------
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      //   const newSelected = rows.map((n) => n.name);
      //   setSelected(newSelected);
      //   return;
    }
  }

  return (
    <>
      <TableContainer
        sx={{
          maxHeight: '350px',
          borderCollapse: 'initial',
          minWidth: !minWidth ? 650 : 500,

          border: '1px solid black',
          borderBottom: footer ? 'none' : ''
        }}
        component={Box}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ pading: '5px', border: '1px solid #666 !important' }}>
              {columnas.length > 0 &&
                columnas.map((item: any, index: number) =>
                  checked && index === 0 ? (
                    <TableCell
                      key={index}
                      sx={{
                        borderBottom: '1px solid #666 !important',
                        borderRight: index === 0 ? '1px solid #BEBEBE !important' : 'none',
                        backgroundColor: '#e5ebf3',
                        cursor: 'pointer'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          m: 0,
                          p: 0
                        }}
                      >
                        <Checkbox
                          sx={{ pl: 0 }}
                          color="primary"
                          checked={false}
                          onChange={handleSelectAllClick}
                          inputProps={{
                            'aria-label': 'select all desserts'
                          }}
                        />
                        <Typography
                          onClick={() => ordenarPorColumna(item.id)}
                          sx={{
                            display: 'flex',
                            m: 0,
                            p: 0,

                            alignItems: 'center'
                          }}
                        >
                          {item.id}
                          {columnaOrdenada === item.id ? (
                            ordenAscendente ? (
                              '▲'
                            ) : (
                              '▼'
                            )
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.4042 6.70737C12.2078 6.43088 11.7922 6.43088 11.5958 6.70737L9.09004 10.235C8.86116 10.5573 9.09507 11 9.49419 11H14.5058C14.9049 11 15.1388 10.5573 14.91 10.235L12.4042 6.70737ZM12.4042 17.2926C12.2078 17.5691 11.7922 17.5691 11.5958 17.2926L9.09004 13.765C8.86116 13.4427 9.09507 13 9.49419 13H14.5058C14.9049 13 15.1388 13.4427 14.91 13.765L12.4042 17.2926Z"
                                fill="#2B2B2B"
                              />
                            </svg>
                          )}
                        </Typography>{' '}
                      </Box>
                    </TableCell>
                  ) : (
                    <TableCell
                      key={index}
                      sx={{
                        borderBottom: '1px solid #666 !important',
                        backgroundColor: '#e5ebf3',
                        cursor: 'pointer'
                      }}
                      align="center"
                      onClick={() => ordenarPorColumna(item.id)}
                    >
                      <Typography
                        sx={{
                          display: 'flex',
                          m: 0,
                          pl: 0,
                          alignItems: 'center'
                        }}
                      >
                        {item.id}
                        {columnaOrdenada === item.id ? (
                          ordenAscendente ? (
                            '▲'
                          ) : (
                            '▼'
                          )
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.4042 6.70737C12.2078 6.43088 11.7922 6.43088 11.5958 6.70737L9.09004 10.235C8.86116 10.5573 9.09507 11 9.49419 11H14.5058C14.9049 11 15.1388 10.5573 14.91 10.235L12.4042 6.70737ZM12.4042 17.2926C12.2078 17.5691 11.7922 17.5691 11.5958 17.2926L9.09004 13.765C8.86116 13.4427 9.09507 13 9.49419 13H14.5058C14.9049 13 15.1388 13.4427 14.91 13.765L12.4042 17.2926Z"
                              fill="#2B2B2B"
                            />
                          </svg>
                        )}
                      </Typography>
                    </TableCell>
                  )
                )}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              overflow: 'hidden !important',
              height: minHeight ? '' : '150px'
            }}
          >
            <Body filas={datos} columnas={columnas} checked={checked} acciones={acciones} />
          </TableBody>
        </Table>
      </TableContainer>
      {footer && (
        <TableFooter
          sx={{
            border: '1px solid black',
            height: '60px',
            width: '100%',
            display: 'flex',
            justifyContent: 'right'
          }}
        >
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={filas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ height: '100%', width: '100%', overflow: 'hidden' }}
            labelRowsPerPage={'Filas por pagina:'}
            labelDisplayedRows={(page) =>
              ` ${page?.from}-${page?.to === -1 ? page?.count : page?.to} de ${page?.count}  `
            }
          />
        </TableFooter>
      )}
    </>
  )
}
