import axios from "axios";
import React, { FC, useContext, useEffect } from "react";
import { Dislike, Like } from "../assets";
import { SwipeCard } from "../components";
import AppContext from "../context/AppContext";
import { types } from "../helpers/types";
import { ContentHome, DislikeButton, LikeButton } from "../styled";
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from "../firebase-config";
import { readCookie } from '../helpers/cookies';

export const Home: FC = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/json/2/all_sports.php`
      );

      dispatch({
        type: types.addSports,
        payload: {
          sports: data.sports,
        },
      });
    })();
  }, [dispatch]);

  const handleClick =  async () => {
    const req = await setDoc( doc(  collection( db, 'users' ) ) , {  idSport: '102', isLike: true, uid: state.uid} );
  }

  return (
    <ContentHome>
        <div className="containerCards">
            <SwipeCard cards={state?.sports} />

        </div>
      <div className="buttons">
        <DislikeButton>
            <img src={ Dislike } alt="" />
        </DislikeButton>
        <LikeButton onClick={handleClick}>
            <img src={ Like } alt="" />
        </LikeButton>
      </div>
    </ContentHome>
  );
};
