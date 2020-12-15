import React from 'react';
import styled from 'styled-components';

interface InfoListProps {
  infos: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    LastUpdate?: Date;
  };
}

const GlobalDiv = styled.div`
  height: 22vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GlobalInfoDiv = styled.div`
  background-color: #505050;
  flex: auto;
  max-width: 150px;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  /*box-sizing: border-box;*/
`;

function GlobalInfo({ infos }: InfoListProps) {
  return (
    <>
      <GlobalInfoDiv>
        <p>총 확진자 (단위: 명)</p>
        <p>{infos.TotalConfirmed}</p>
        <p>+ ({infos.NewConfirmed})</p>
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 사망자 (단위: 명)</p>
        <p>{infos.TotalDeaths}</p>
        <p>+ ({infos.NewDeaths})</p>
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 회복 (단위: 명)</p>
        <p>{infos.TotalRecovered}</p>
        <p>+ ({infos.NewRecovered})</p>
      </GlobalInfoDiv>
    </>
  );
}

function InfoList({ infos }: InfoListProps) {
  return (
    <GlobalDiv>
      <GlobalInfo infos={infos} />
    </GlobalDiv>
  );
}

export default InfoList;
