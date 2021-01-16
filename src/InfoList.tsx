import { CountryItem } from 'models';
import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Col, Div, Row, Span } from 'style';
import { numWithComma } from 'javascript/numWithComma';

interface Props {
  countryItems: CountryItem[];
}

interface CountryInfoProps {
  countryItem: CountryItem;
  rank?: number;
}

export const InfoList: FC<Props> = ({ countryItems }) => (
  <Col width="100%" alignItems="center">
    <Row
      width="100%"
      maxWidth="800px"
      justifyContent="space-between"
      color="white"
    >
      <GlobalInfo countryItems={countryItems} />
    </Row>
    <Col
      width="100%"
      maxWidth="800px"
      color="white"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      mt="10px"
      borderRadius="20px"
      alignItems="stretch"
    >
      <CountryInfoList countryItems={countryItems} />
    </Col>
  </Col>
);

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
        <Span>
          <CountUp start={0} end={globalInfo.TotalConfirmed} separator="," />
        </Span>
        <br />+ (
        <Span color="#ffff00">
          <CountUp start={0} end={globalInfo.NewConfirmed} separator="," />
        </Span>
        )
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 사망자 (단위: 명)</p>
        <Span>
          <CountUp start={0} end={globalInfo.TotalDeaths} separator="," />
          <br />+ (
        </Span>
        <Span color="#f15555">
          <CountUp start={0} end={globalInfo.NewDeaths} separator="," />
        </Span>
        )
      </GlobalInfoDiv>
      <GlobalInfoDiv>
        <p>총 완치자 (단위: 명)</p>
        <Span>
          <CountUp start={0} end={globalInfo.TotalRecovered} separator="," />
        </Span>
        <br />+ (
        <Span color="#55f155">
          <CountUp start={0} end={globalInfo.NewRecovered} separator="," />
        </Span>
        )
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
      <Row justifyContent="center">
        <h2>신규 확진자 TOP 5</h2>
      </Row>
      <Row p="16px" justifyContent="space-around" flexWrap="wrap">
        {sortedNew.slice(0, 5).map((val, idx) => (
          <CountryInfo countryItem={val} rank={idx + 1} key={idx} />
        ))}
      </Row>
      <Row justifyContent="center">
        <h2>총 확진자 TOP 5</h2>
      </Row>
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
    <Div m="4px">
      <Span fontSize="20px">{!rank || `#${rank}`}</Span>
      <CountryInfoDiv>
        {countryItem.Country}
        <p>
          <Span>
            확진자: {numWithComma(countryItem.TotalConfirmed)}
            <br />+ ({numWithComma(countryItem.NewConfirmed)})
          </Span>
        </p>
        <p>
          사망자: {numWithComma(countryItem.TotalDeaths)} <br />+ (
          {numWithComma(countryItem.NewDeaths)})
        </p>
      </CountryInfoDiv>
    </Div>
  );
};

const GlobalInfoDiv = styled.div`
  background-color: #505050;
  flex: auto;
  font-size: 25px;
  max-width: 200px;
  text-align: center;
  padding: 16px 10px;
  border-radius: 16px;
  margin: 4px;
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
