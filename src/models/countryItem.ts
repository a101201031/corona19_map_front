export interface CountryItem {
  _id: string;
  Country: string;
  CountryCode: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  LastUpdate: Date;
}
