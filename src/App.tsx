import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Col, Div } from 'style';
import { Dashboard } from 'Dashboard';
import ChartMap from 'ChartMap';
import { CtryItemsProvider } from 'contexts/CtryItemsCont';
import { LastUpd } from 'LastUpd';

export const App: FC = () => {
  return (
    <Router>
      <Col
        width="100%"
        height="100%"
        justifyContent="stretch"
        alignItems="stretch"
      >
        <CtryItemsProvider>
          <ToolbarDiv>
            <Div textAlign="center" width="120px" ml="10px" mr="10px">
              <LastUpd />
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
                <ChartMap />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </ContentDiv>
        </CtryItemsProvider>
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
