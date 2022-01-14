import { createContext, Dispatch } from "react";

interface typeCoords {
  x: number, 
  y: number, 
  scale: number, 
  transY: number,
}

export interface typeSports {
  idSport: string;
  strFormat: string;
  strSport: string;
  strSportDescription: string;
  strSportIconGreen: string;
  strSportThumb: string;
  coords?: typeCoords;
  isLike?: boolean
}

export interface typeState {
  theme?: boolean,
  sports?: typeSports[],
  logged?: boolean,
  uid?: string,
}

interface typeDispatch {
  type: string;
  payload: typeState;
}

interface AppContextInterface {
  state: typeState;
  dispatch: Dispatch<typeDispatch>;
}

const AppContext = createContext<AppContextInterface>({
  state: {} ,
  dispatch: () => {},
});
// logged: false, sports: [], theme: false, uid: ""

export default AppContext;
