import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, NotFound } from "./pages";
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
    // setTheme(!theme);
    dispatch({
      type: types.toggleTheme,
      payload:{}
    });
  };

  return (
    // <Theme theme={theme[0]} >
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyles theme={state.theme} />

      {/* revisar por que no cambiar le background del boton de toggle */}
      <ToggleTheme theme={state.theme} onClick={handleTheme}>
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

      {/* </Theme> */}
    </AppContext.Provider>
  );
}

export default App;
