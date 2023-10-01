export function maskPhoneNumber(rawPhoneNumber: string) {
      return rawPhoneNumber.substring(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

export function unmaskPhoneNumber(rawPhoneNumber: string) {
    function keepThisChar(char: string) {
        const unwantedCharList = ['(', ')', '-', ' '];

        return ! unwantedCharList.includes(char)
    }
    return rawPhoneNumber.split('').filter((char) => keepThisChar(char)).join('').substring(0,11)
}
