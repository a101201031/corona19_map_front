import React, { FC, useEffect, useState } from 'react';
import Map from 'map';
import Dashboard from 'dashboard';
import 'App.css';
import { CountryItem } from 'models';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import styled from 'styled-components';

const App: FC = () => {
  enum TabEnum {
    dashBoard = 0,
    map = 1,
  }

  const [countryItems, setCountryItems] = useState<CountryItem[]>([]);
  const [tab, setTab] = useState<TabEnum>(TabEnum.dashBoard);

  const contents = {
    0: <Dashboard countryItems={countryItems} />,
    1: <Map />,
  };

  const getCountryItems = async () => {
    const globalInfo = await getCoronaInfo();
    setCountryItems(globalInfo);
  };

  useEffect(() => {
    getCountryItems();
  }, []);

  const tabChange = (id: TabEnum) => {
    setTab(id);
  };

  return (
    <>
      <ToolbarDiv>
        <TabUl>
          <TabLi onClick={() => tabChange(TabEnum.dashBoard)}>
            상황판 보기
          </TabLi>
          <TabLi onClick={() => tabChange(TabEnum.map)}>지도로 보기</TabLi>
        </TabUl>
      </ToolbarDiv>
      <ContentDiv>{contents[tab]}</ContentDiv>
    </>
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
  height: 90%;
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
  &:hover {
    background: orange;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default App;
