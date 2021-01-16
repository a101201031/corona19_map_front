export const numWithComma = (num: number): string => {
  let numString = num.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(numString))
    numString = numString.replace(pattern, '$1,$2');
  return numString;
};
