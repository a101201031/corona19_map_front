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

async function getGlobalInfo(url: string): Promise<GlobalCoronaInfoTypes> {
  return new Promise((resolve, rejects) => {
    axios
      .get(`${process.env.REACT_APP_REST_API_URL}${url}`)
      .then((res) => {
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        rejects();
      });
  });
}

export default getGlobalInfo;
