export const getCountryImoji = (cc: string): string => {
  const offset = 127397;
  const codeArray: number[] = Array.from(cc).map(
    (c) => c.codePointAt(0)! + offset,
  );
  return String.fromCodePoint(...codeArray);
};
