import { InfoList } from 'InfoList';
import { CountryItem } from 'models';
import React from 'react';
import styled from 'styled-components';
import Earth from 'earth.jpg';

interface Props {
  countryItems: CountryItem[];
}

export const Dashboard: React.FC<Props> = ({ countryItems }) => {
  return (
    <DashboardContainer>
      <InfoList countryItems={countryItems} />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  background-image: url(${Earth});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
