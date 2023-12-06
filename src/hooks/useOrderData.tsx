import { useState, useCallback } from 'react'
import sortByProperty from '../utils/sortByProperty'

interface Params<T> {
  setData: React.Dispatch<React.SetStateAction<T[]>>
}

const useOrderData = <T,>({ setData }: Params<T>) => {
  const [isAscending, setIsAscending] = useState(false)

  const [selectedOrderId, setSelectedOrderId] = useState<keyof T>({} as keyof T)

  const orderFunction = ({ id, isAscending }: { id: keyof T; isAscending: boolean }) => {
    setData((prevState: Array<T>) => sortByProperty(prevState, id, isAscending))
  }

  const handleOrderMeps = (id: keyof T) => {
    if (selectedOrderId === id) {
      setIsAscending(!isAscending)
      orderFunction({ id, isAscending: !isAscending })
    } else {
      setIsAscending(false)
      orderFunction({ id, isAscending: false })
    }
    setSelectedOrderId(id)
  }

  const resetOrderValues = useCallback(() => {
    setIsAscending(false)
    setSelectedOrderId({} as keyof T)
  }, [])

  return { isAscending, selectedOrderId, handleOrderMeps, resetOrderValues }
}

export default useOrderData
