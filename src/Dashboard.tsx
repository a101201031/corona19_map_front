import { InfoList } from 'InfoList';
import React, { FC } from 'react';
import styled from 'styled-components';
import Earth from 'earth.jpg';

export const Dashboard: FC = () => (
  <DashboardContainer>
    <InfoList />
  </DashboardContainer>
);

const DashboardContainer = styled.div`
  flex: 1;
  background-image: url(${Earth});
  background-size: cover;
`;
