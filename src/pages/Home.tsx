import React, { FC, useContext, useEffect, useState } from "react";
import { Dislike, Like } from "../assets";
import { SwipeCard } from "../components";
import AppContext, { typeSports } from "../context/AppContext";
import { types } from "../helpers/types";
import { ContentHome, DislikeButton, LikeButton } from "../styled";
import { handleLike } from "../helpers";
import axios from "axios";

export const Home: FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const [sports, setSports] = useState<typeSports[]>([
    {
      coords: { x: 0, y: 0, scale: 1, transY: 0 },
      isLike: false,
      idSport: "",
      strFormat: "",
      strSport: "",
      strSportDescription: "",
      strSportIconGreen: "",
      strSportThumb: "",
    },
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/json/2/all_sports.php`
      );

      const newData = data?.sports.map((obj: typeSports) => ({
        ...obj,
        coords: { x: 0, y: 0, scale: 1, transY: 0 },
        isLike: false,
      }));

      setSports(newData);
      setIndex(newData.length - 1);

      dispatch({
        type: types.addSports,
        payload: {
          sports: data?.sports,
        },
      });
    })();
  }, [dispatch]);

  return (
    <ContentHome>
      <div className="containerCards">
        <SwipeCard cards={sports} setIndex={setIndex} setSports={setSports} />
      </div>
      <div className="buttons">
        <DislikeButton
          theme={{ isDark: state?.theme }}
          onClick={() =>
            handleLike(setSports, index, setIndex, {
              idSport: sports[index].idSport,
              isLike: false,
              uid: state?.uid,
            })
          }
        >
          <img src={Dislike} alt="" />
        </DislikeButton>
        <LikeButton
          onClick={() =>
            handleLike(setSports, index, setIndex, {
              idSport: sports[index].idSport,
              isLike: true,
              uid: state?.uid,
            })
          }
        >
          <img src={Like} alt="" />
        </LikeButton>
      </div>
    </ContentHome>
  );
};
