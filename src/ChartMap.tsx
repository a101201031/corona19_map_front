import { ENV } from 'constants/ENV';
import { CountryItem } from 'models';
import React, { FC, useMemo } from 'react';
import { Chart } from 'react-google-charts';

interface Props {
  countryItems: CountryItem[];
}

const ChartMap: FC<Props> = ({ countryItems }) => {
  const dataColumn = ['country', '총 확진자', '신규 확진자'];
  const dataRow = useMemo(
    () =>
      countryItems.map((val) => [
        { v: val.CountryCode, f: val.Country },
        val.TotalConfirmed,
        val.NewConfirmed,
      ]),
    [countryItems],
  );
  return (
    <Chart
      chartType="GeoChart"
      mapsApiKey={ENV.GOOGLE_API_KEY}
      data={[dataColumn, ...dataRow]}
      chartLanguage={'korean'}
    />
  );
};
export default React.memo(ChartMap);
