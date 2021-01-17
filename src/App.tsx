import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { CountryItem } from 'models';
import { CountryName } from 'lang/korean';
import { Col, Div, Span } from 'style';
import { Dashboard } from 'Dashboard';
import ChartMap from 'ChartMap';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import { getCountryImoji } from 'javascript/getCountryImoji';
import { dateFormat } from 'javascript/dateFormat';

export const App: FC = () => {
  const [countryItems, setCountryItems] = useState<CountryItem[]>([]);
  const [lastUpd, setLastUpd] = useState<CountryItem['LastUpdate']>();

  const getCountryItems = async () => {
    const globalInfo = await getCoronaInfo();
    globalInfo.map(
      (v) =>
        (v.Country =
          CountryName[v.CountryCode] + ' ' + getCountryImoji(v.CountryCode)),
    );
    setCountryItems(globalInfo);
    setLastUpd(new Date(globalInfo[0].LastUpdate));
  };

  useEffect(() => {
    getCountryItems();
  }, []);

  return (
    <Router>
      <Col
        width="100%"
        height="100%"
        justifyContent="stretch"
        alignItems="stretch"
      >
        <ToolbarDiv>
          <Div textAlign="center" width="120px" ml="10px" mr="10px">
            <Span color="white" fontSize="15px">
              갱신일
              <br />
              {dateFormat(lastUpd!)}
            </Span>
          </Div>
          <TabUl>
            <Link to="/">
              <TabLi>상황판 보기</TabLi>
            </Link>
            <Link to="/map">
              <TabLi>지도로 보기</TabLi>
            </Link>
          </TabUl>
          <Div width="120px"></Div>
        </ToolbarDiv>
        <ContentDiv>
          <Switch>
            <Route path="/map">
              <ChartMap countryItems={countryItems} />
            </Route>
            <Route path="/">
              <Dashboard countryItems={countryItems} />
            </Route>
          </Switch>
        </ContentDiv>
      </Col>
    </Router>
  );
};

const ToolbarDiv = styled.div`
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContentDiv = styled.div`
  height: calc(100% - 60px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;
const TabUl = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 330px;
  display: flex;
  justify-content: center;
`;
const TabLi = styled.li`
  background: #ededed;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid black;
  color: black;
  transition: background-color 0.5s;
  &:hover {
    background: #505050;
    color: #ededed;
    font-weight: bold;
  }
`;
