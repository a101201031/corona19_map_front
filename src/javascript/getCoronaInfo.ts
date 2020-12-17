import axios from 'axios';
import { ENV } from 'constants/ENV';
import { CountryItem } from 'models';

const httpClient = axios.create({
  baseURL: ENV.API_URL,
});

export const getCoronaInfo = async () => {
  try {
    const { data } = await httpClient.get<{ data: CountryItem[] }>(
      '/countries-corona-info',
    );
    return data.data;
  } catch {
    return [];
  }
};
