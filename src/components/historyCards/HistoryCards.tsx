import React, { FC, useContext, useEffect, useState } from "react";
import { Like, Dislike } from "../../assets";
import AppContext from "../../context/AppContext";
import { HistoryInfo } from "../../styled";

interface propsCard {
  isLike: boolean;
  idSport: string;
}

interface typesSports {
  idSport: string;
  strFormat: string;
  strSport: string;
  strSportDescription: string;
  strSportIconGreen: string;
  strSportThumb: string;
}

const HistoryCards: FC<propsCard> = ({ isLike, idSport }) => {
  const [srcImg, setSrcImg] = useState<string>();

  const {
    state: { sports, theme },
  } = useContext(AppContext);

  useEffect(() => {
    const src = sports?.find((obj: typesSports) => obj.idSport === idSport);
    setSrcImg(src?.strSportThumb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HistoryInfo theme={{ isDark: theme }}>
      <div className="imageSport">
        <img src={srcImg} className="imageSport" alt="sport" />
      </div>
      <div>
        <img src={isLike ? Like : Dislike} alt="" />
        {/* <img src="" alt="" srcset="" /> */}
      </div>
    </HistoryInfo>
  );
};

export default HistoryCards;
