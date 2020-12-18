import { CountryItem } from 'models';
import React, { FC, useMemo, useState } from 'react';
import styled from 'styled-components';

interface Props {
  countryItems: CountryItem[];
}

interface CountryInfoProps {
  countryItem: CountryItem;
  rank?: number;
}

export const InfoList: FC<Props> = ({ countryItems }) => {
  return (
    <>
      <GlobalDiv>
        <GlobalInfo countryItems={countryItems} />
      </GlobalDiv>
      <CountryMainDiv>
        <CountryInfoList countryItems={countryItems} />
      </CountryMainDiv>
    </>
  );
};

const GlobalInfo: FC<Props> = ({ countryItems }) => {
  const globalInfo = useMemo(
    () =>
      countryItems.reduce(
        (prev, curr) => ({
          NewConfirmed: prev.NewConfirmed + curr.NewConfirmed,
          TotalConfirmed: prev.TotalConfirmed + curr.TotalConfirmed,
          NewDeaths: prev.NewDeaths + curr.NewDeaths,
          TotalDeaths: prev.TotalDeaths + curr.TotalDeaths,
          NewRecovered: prev.NewRecovered + curr.NewRecovered,
          TotalRecovered: prev.TotalRecovered + curr.TotalRecovered,
          LastUpdate: curr.LastUpdate,
        }),
        {
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
          TotalRecovered: 0,
          LastUpdate: new Date(),
        },
      ),
    [countryItems],
  );

  return (
    <>
      <GlobalInfoDiv>
        <p>총 확진자 (단위: 명)</p>
        <p>{globalInfo.TotalConfirmed}</p>
        <p>+ ({globalInfo.NewConfirmed})</p>
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 사망자 (단위: 명)</p>
        <p>{globalInfo.TotalDeaths}</p>
        <p>+ ({globalInfo.NewDeaths})</p>
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 회복 (단위: 명)</p>
        <p>{globalInfo.TotalRecovered}</p>
        <p>+ ({globalInfo.NewRecovered})</p>
      </GlobalInfoDiv>
    </>
  );
};

const CountryInfoList: FC<Props> = ({ countryItems }) => {
  const sortedNew = useMemo(
    () => countryItems.slice().sort((a, b) => b.NewConfirmed - a.NewConfirmed),
    [countryItems],
  );
  const sortedTotal = useMemo(
    () =>
      countryItems.slice().sort((a, b) => b.TotalConfirmed - a.TotalConfirmed),
    [countryItems],
  );
  return (
    <>
      <h2>신규 확진자 TOP 5</h2>
      <CountryDiv>
        {sortedNew.slice(0, 5).map((val, idx) => (
          <CountryInfo countryItem={val} rank={idx + 1} key={idx} />
        ))}
      </CountryDiv>
      <h2>총 확진자 TOP 5</h2>
      <CountryDiv>
        {sortedTotal.slice(0, 5).map((val, idx) => (
          <CountryInfo countryItem={val} rank={idx + 1} key={idx} />
        ))}
      </CountryDiv>
    </>
  );
};

const CountryInfo: FC<CountryInfoProps> = ({ countryItem, rank }) => {
  return (
    <div>
      <RankingSpan>{!rank || `#${rank}`}</RankingSpan>
      <CountryInfoDiv>
        <p>{countryItem.Country}</p>
        <p>확진자: {countryItem.TotalConfirmed}</p>
        <p>+ ({countryItem.NewConfirmed})</p>
        <p>사망자: {countryItem.TotalDeaths}</p>
        <p>+ ({countryItem.NewDeaths})</p>
      </CountryInfoDiv>
    </div>
  );
};

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
`;
const CountryMainDiv = styled.div`
  width: 80%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 20px;
  border: 3px solid black;
`;
const CountryDiv = styled.div`
  padding: 16px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;
const CountryInfoDiv = styled.div`
  background-color: #505050;
  flex: auto;
  max-width: 150px;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
`;
const RankingSpan = styled.span`
  color: black;
  font-size: 20px;
`;
