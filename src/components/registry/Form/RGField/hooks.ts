export function maskRGNumber(rawPhoneNumber: string) {
      return rawPhoneNumber.substring(0, 8).replace(/(\d{7})(\d{1})/, '$1-$2');
  }

export function unmaskRGNumber(maskedNumber: string) {
    return maskedNumber.replace(/[^0-9]/g, '').substring(0,8)
}
