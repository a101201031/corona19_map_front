import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Dashboard } from 'Dashboard';
import { CountryItem } from 'models';
import { CountryName } from 'lang/korean';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import styled from 'styled-components';
import ChartMap from 'ChartMap';
import { Col } from 'style';
import { getCountryImoji } from 'javascript/getCountryImoji';
export const App: FC = () => {
  const [countryItems, setCountryItems] = useState<CountryItem[]>([]);

  const getCountryItems = async () => {
    const globalInfo = await getCoronaInfo();
    globalInfo.map(
      (v) =>
        (v.Country =
          CountryName[v.CountryCode] + ' ' + getCountryImoji(v.CountryCode)),
    );
    setCountryItems(globalInfo);
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
          <TabUl>
            <Link to="/">
              <TabLi>상황판 보기</TabLi>
            </Link>
            <Link to="/map">
              <TabLi>지도로 보기</TabLi>
            </Link>
          </TabUl>
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
  justify-content: center;
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
    font-size: 25px;
    font-weight: bold;
  }
`;
