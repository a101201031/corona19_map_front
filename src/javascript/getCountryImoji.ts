export const getCountryImoji = (cc: string): string => {
  const offset = 127397;
  const codeArray: number[] = [];
  for (let c of cc) {
    codeArray.push(c.codePointAt(0)! + offset);
  }
  return String.fromCodePoint(...codeArray);
};
