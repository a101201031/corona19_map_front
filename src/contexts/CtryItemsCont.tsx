import {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useContext,
} from 'react';
import { CountryItem } from 'models';
import { getCoronaInfo } from 'javascript/getCoronaInfo';
import { Korean } from 'lang';
import { getCountryImoji } from 'javascript/getCountryImoji';

type CtryItemsState = CountryItem[];
const CtryItemsSCont = createContext<CtryItemsState | undefined>(undefined);

type SortAble = Pick<
  CountryItem,
  | 'TotalConfirmed'
  | 'NewConfirmed'
  | 'TotalDeaths'
  | 'NewDeaths'
  | 'TotalRecovered'
  | 'NewRecovered'
>;
type Action =
  | { type: 'SET_KOREAN' }
  | {
      type: 'SORT';
      sortBy: keyof SortAble;
    };

type CtryItemsDisp = Dispatch<Action>;
const CtryItemsDCont = createContext<CtryItemsDisp | undefined>(undefined);

const ctryItemsReducer = (
  state: CtryItemsState,
  action: Action,
): CtryItemsState => {
  switch (action.type) {
    case 'SET_KOREAN':
      return state.map((v) => ({
        ...v,
        Country: `${Korean[v.CountryCode]} ${getCountryImoji(v.CountryCode)}`,
      }));
    case 'SORT':
      return state
        .slice()
        .sort((a, b) => b[action.sortBy] - a[action.sortBy])
        .slice(0, 5);
    default:
      throw new Error('Unhandled action');
  }
};

export const CtryItemsContProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const initState = await getCoronaInfo();
  const [ctryItems, disp] = useReducer(ctryItemsReducer, initState);

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
