export function roundNumber(num: number, decimalPlaces: number = 1) {
  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
}
