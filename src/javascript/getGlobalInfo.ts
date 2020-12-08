import axios from 'axios';

interface GlobalCoronaInfoTypes {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  LastUpdate: Date;
}

interface ResponseTypes {
  message: string;
  data: GlobalCoronaInfoTypes[] | '';
}

async function getGlobalInfo(url: string): GlobalCoronaInfoTypes {
  try {
    const resData = await axios.get(`${url}/global-corona-info`);
    return resData.data[0];
  } catch (err) {
    throw err;
  }
}
