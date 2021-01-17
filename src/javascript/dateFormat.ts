export const dateFormat = (date: Date | undefined): string => {
  if (typeof date === 'undefined') return `로딩 중..`;
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
