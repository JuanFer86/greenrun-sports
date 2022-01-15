import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import { Button, ContentLogin as Content } from "../../styled";
import { Messi } from "../../assets";

import contentLogin from '../../data/login.json';
import AppContext from "../../context/AppContext";

interface toggleProps {
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const ContentLogin: FC<toggleProps> = ({ setToggle }) => {

  const { state } = useContext(AppContext)

  const { contentLogin: data } = contentLogin

  const handleClick = () => {
    setToggle(false)
  }


  return (
    <Content theme={{ isDark: state.theme}} >
      <img src={Messi} alt="messi" width="100%" />
      <div className="presentation">
        <h4>{data.title as string}</h4>
        <p>{data.description as string}</p>
        <Button type="button" onClick={handleClick}>{data.btnLogin}</Button>
      </div>
    </Content>
  );
};

export default ContentLogin;
