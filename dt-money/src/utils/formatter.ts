export function dateFormatter(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export function priceFormatter(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
