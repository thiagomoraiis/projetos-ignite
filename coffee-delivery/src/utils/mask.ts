export function applyMask(value: string) {
  value = value.replace(/\D/g, '')
  if (value.length > 5) {
    value = value.slice(0, 5) + '-' + value.slice(5, 8)
  }
  return value
}
