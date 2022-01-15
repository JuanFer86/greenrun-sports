import React, { FC, useContext } from "react";
import { LogoutButton } from "../styled";
import { ContentProfile } from "../styled/contentProfile";
import  data  from '../data/Profile.json';
import { getAuth, signOut } from "firebase/auth";
import AppContext from "../context/AppContext";
import { types } from "../helpers/types";

export const Profile: FC = () => {

    const { dispatch } = useContext(AppContext)

    const { titleBtn } = data
    
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

            dispatch({
                type: types.logout,
                payload: {},
              });
            
        }).catch(console.log)
    }

  return (
    <ContentProfile>
      <div>
        <LogoutButton onClick={ handleLogout } >{ titleBtn }</LogoutButton>
      </div>
    </ContentProfile>
  );
};
