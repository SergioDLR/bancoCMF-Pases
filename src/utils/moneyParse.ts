const moneyParse = (money: number, currency: string = 'ARP') => {
  const formatter = new Intl.NumberFormat('es-AR', {
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })
  return formatter.format(money)
}

export default moneyParse
