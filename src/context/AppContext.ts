import { createContext } from 'react'

interface AppContextInterface {
    state: any,
    dispatch: any,
  }

const AppContext = createContext<AppContextInterface>({ state: {}, dispatch: () => {} });

export default AppContext;