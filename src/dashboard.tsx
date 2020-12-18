import React, { useEffect, useState } from 'react';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import { CountryItem } from 'models';
import { InfoList } from 'infoList';

const Dashboard: React.FC = () => {
  const [countryItems, setCountryItems] = useState<CountryItem[]>([]);

  const getCountryItems = async () => {
    const globalInfo = await getCoronaInfo();
    setCountryItems(globalInfo);
  };

  useEffect(() => {
    getCountryItems();
  }, []);

  return (
    <>
      <InfoList countryItems={countryItems} />
    </>
  );
};

export default Dashboard;
