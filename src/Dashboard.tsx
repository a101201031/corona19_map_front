import { InfoList } from 'InfoList';
import { CountryItem } from 'models';
import React from 'react';

interface Props {
  countryItems: CountryItem[];
}

export const Dashboard: React.FC<Props> = ({ countryItems }) => {
  return (
    <>
      <InfoList countryItems={countryItems} />
    </>
  );
};
