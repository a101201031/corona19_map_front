import {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { CountryItem } from 'models';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import { Korean } from 'lang';
import { getCountryImoji } from 'javascript/getCountryImoji';

type CtryItemsState = CountryItem[];
const CtryItemsSCont = createContext<CtryItemsState | undefined>(undefined);

type Action = { type: 'LOAD'; data: CtryItemsState } | { type: 'SET_KOREAN' };

type CtryItemsDisp = Dispatch<Action>;
const CtryItemsDCont = createContext<CtryItemsDisp | undefined>(undefined);

const ctryItemsReducer = (
  state: CtryItemsState,
  action: Action,
): CtryItemsState => {
  switch (action.type) {
    case 'LOAD':
      return action.data;
    case 'SET_KOREAN':
      return state.map((v) => ({
        ...v,
        Country: `${Korean[v.CountryCode]} ${getCountryImoji(v.CountryCode)}`,
      }));
    default:
      throw new Error('Unhandled action');
  }
};

const initState: CtryItemsState = [
  {
    _id: 'load..',
    Country: 'load..',
    CountryCode: 'KR',
    TotalConfirmed: 0,
    NewConfirmed: 0,
    TotalDeaths: 0,
    NewDeaths: 0,
    TotalRecovered: 0,
    NewRecovered: 0,
    LastUpdate: new Date(0, 0, 0),
  },
];

export const CtryItemsProvider = ({ children }: { children: ReactNode }) => {
  const [ctryItems, disp] = useReducer(ctryItemsReducer, initState);
  const loadData = async () => {
    const callCtryItems = await getCoronaInfo();
    disp({ type: 'LOAD', data: callCtryItems });
    disp({ type: 'SET_KOREAN' });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <CtryItemsDCont.Provider value={disp}>
      <CtryItemsSCont.Provider value={ctryItems}>
        {children}
      </CtryItemsSCont.Provider>
    </CtryItemsDCont.Provider>
  );
};

export const useCtryItemsState = () => {
  const state = useContext(CtryItemsSCont);
  if (!state) throw new Error('CtryItemsProvider not found');
  return state;
};

export const useCtryItemsDisp = () => {
  const disp = useContext(CtryItemsDCont);
  if (!disp) throw new Error('CtryItemsProvider not found');
  return disp;
};
