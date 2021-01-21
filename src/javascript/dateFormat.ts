import dayjs from 'dayjs';

export const dateFormat = (date: Date | undefined): string =>
  typeof date === 'undefined'
    ? '로딩 중 ...'
    : dayjs(date).format('YYYY-MM-DD HH:mm');
