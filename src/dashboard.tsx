import React, { useState } from 'react';
// import getCoronaInfo from 'javascript/getGlobalInfo';
// import 'dashboard.css';

function Dashboard() {
  const sampleData = [
    {
      name: 'soo',
      data: '13527189',
    },
    {
      name: 'Ol Jihoon',
      data: 'ILL HY HL',
    },
  ];
  const [content, setContent] = useState(sampleData);
  const lodaContent = content.map((val, idx) => {
    return (
      <div className="dashboard-content" key={idx}>
        <p>{val.name}</p>
        <p>{val.data}</p>
      </div>
    );
  });

  return (
    <>
      <div className="top-toolbar"></div>
      <div className="dashboard">
        <div>{lodaContent}</div>
      </div>
    </>
  );
}

export default Dashboard;
