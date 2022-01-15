import React, { useEffect, useReducer } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages";
import { GlobalStyles, ToggleTheme } from "./styled";
import { DarkIcon, LightIcon } from "./assets";
import AppContext from "./context/AppContext";
import { PrivateRoute, ProtectedRoutes, PublicRoute } from "./components";
import { AppReducer } from "./context/AppReducer";
import { types } from "./helpers/types";

const init = () => {
  const storage = localStorage.getItem('state')
  return storage !== null ? JSON.parse(storage) : { theme: true, logged: false };
}

function App() {

  const [state, dispatch] = useReducer(AppReducer, {}, init)

  useEffect(() => {
    localStorage.setItem( 'state', JSON.stringify(state) );
  }, [state])

  const handleTheme = (): void => {
    dispatch({
      type: types.toggleTheme,
      payload:{}
    });
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyles theme={state.theme} />

      <ToggleTheme theme={{ isDark: state.theme}} onClick={handleTheme}>
        <img
          src={state.theme ? LightIcon : DarkIcon}
          alt="theme"
          width="15"
          height="20"
        />
      </ToggleTheme>
      <Router>
        <Routes>
          <Route path="/login" element={ 
            <PublicRoute >
              <Login />
            </PublicRoute>
          } />
          <Route path='/*' element={
            <PrivateRoute>
              <ProtectedRoutes />
            </PrivateRoute>
          } />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>

    </AppContext.Provider>
  );
}

export default App;
