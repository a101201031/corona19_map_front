import { InfoList } from 'infoList';
import { CountryItem } from 'models';
import React from 'react';

interface Props {
  countryItems: CountryItem[];
}

const Dashboard: React.FC<Props> = ({ countryItems }) => {
  return (
    <>
      <InfoList countryItems={countryItems} />
    </>
  );
};

export default Dashboard;
