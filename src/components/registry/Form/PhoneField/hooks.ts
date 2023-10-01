export function maskPhoneNumber(rawPhoneNumber: string) {
      return rawPhoneNumber.substring(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

export function unmaskPhoneNumber(rawPhoneNumber: string) {
    return rawPhoneNumber.replace(/[^0-9]/g, '').substring(0,11)
}
