export function maskCPFNumber(rawPhoneNumber: string) {
      return rawPhoneNumber.substring(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

export function unmaskCPFNumber(maskedNumber: string) {
    return maskedNumber.replace(/[^0-9]/g, '').substring(0,11)
}
