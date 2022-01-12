import React, { FC, useContext } from "react";
import { Button, ContentLogin as Content } from "../../styled";
import { Messi } from "../../assets";
import AppContext from "../../context/AppContext";

import contentLogin from '../../data/login.json';

interface toggleProps {
  setToggle: any;
}

const ContentLogin: FC<toggleProps> = ({ setToggle }) => {

  const { contentLogin: data } = contentLogin

  const handleClick = () => {
    setToggle(false)
  }


  return (
    <Content>
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
