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
      <div>
        <TabUl>
          <TabLi onClick={() => tabChange(TabEnum.dashBoard)}>
            상황판 보기
          </TabLi>
          <TabLi onClick={() => tabChange(TabEnum.map)}>지도로 보기</TabLi>
        </TabUl>
      </div>
      <div className="contents">{contents[tab]}</div>
    </>
  );
};

const TabUl = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
`;
const TabLi = styled.li`
  background: #ededed;
  display: inline-block;
  padding: 10px 15px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export default App;
