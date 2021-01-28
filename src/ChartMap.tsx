import { ENV } from 'constants/ENV';
import { useCtryItemsState } from 'contexts/CtryItemsCont';
import React, { FC, useMemo } from 'react';
import { Chart } from 'react-google-charts';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';

const ChartMap: FC = () => {
  const ctryItems = useCtryItemsState();

  const dataColumn = ['country', '총 확진자', '총 사망자'];
  const dataRow = useMemo(
    () =>
      ctryItems.map((val) => [
        { v: val.CountryCode, f: val.Country },
        val.TotalConfirmed,
        val.TotalDeaths,
      ]),
    [ctryItems],
  );

  const options: ChartWrapperOptions['options'] = {
    colorAxis: { colors: ['#cfcfcf', '#cf0000'] },
    backgroundColor: '#101010',
    datalessRegionColor: '#101010',
    defaultColor: '#101010',
  };

  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="GeoChart"
      mapsApiKey={ENV.GOOGLE_API_KEY}
      data={[dataColumn, ...dataRow]}
      options={options}
    />
  );
};
export default React.memo(ChartMap);
