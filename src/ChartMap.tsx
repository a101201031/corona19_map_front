import { ENV } from 'constants/ENV';
import { CountryItem } from 'models';
import React, { FC, useMemo } from 'react';
import { Chart } from 'react-google-charts';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';

interface Props {
  countryItems: CountryItem[];
}

const ChartMap: FC<Props> = ({ countryItems }) => {
  const dataColumn = ['country', '총 확진자', '총 사망자'];
  const dataRow = useMemo(
    () =>
      countryItems.map((val) => [
        { v: val.CountryCode, f: val.Country },
        val.TotalConfirmed,
        val.TotalDeaths,
      ]),
    [countryItems],
  );

  const options: ChartWrapperOptions['options'] = {
    colorAxis: { colors: ['#cfcfcf', '#cf0000'] },
    backgroundColor: '#303030',
    datalessRegionColor: '#303030',
  };

  return (
    <Chart
      chartType="GeoChart"
      mapsApiKey={ENV.GOOGLE_API_KEY}
      data={[dataColumn, ...dataRow]}
      options={options}
    />
  );
};
export default React.memo(ChartMap);
