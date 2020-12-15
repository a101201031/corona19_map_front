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

async function getCoronaInfo(url: {
  baseUrl: string;
  reqUrl: string;
}): Promise<GlobalCoronaInfoTypes> {
  return new Promise((resolve, rejects) => {
    axios
      .get(`${url.baseUrl}${url.reqUrl}`)
      .then((res) => {
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        rejects();
      });
  });
}

export default getCoronaInfo;
