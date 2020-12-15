import React, { useEffect, useState } from 'react';
import getCoronaInfo from 'javascript/getCoronaInfo';
import InfoList from 'infoList';

function Dashboard() {
  const sampleData = {
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    LastUpdate: new Date(),
  };

  const [globalInfo, setGlobalInfo] = useState(sampleData);

  useEffect(() => {
    (async () => {
      const url = {
        baseUrl: process.env.REACT_APP_REST_API_URL,
        reqUrl: '/global-corona-info',
      };
      const globalInfo = await getCoronaInfo(url);
      setGlobalInfo(globalInfo);
    })();
  }, []);

  return (
    <>
      <InfoList infos={globalInfo} />
    </>
  );
}

export default Dashboard;
