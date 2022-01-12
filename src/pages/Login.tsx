import React, { FC, useState } from "react";
import { ContentFormLogin, ContentLogin } from "../components";
import { useWindowSize } from "../helpers";

export const Login: FC = () => {

    const [toggle, setToggle] = useState(true);

    const [ width ] = useWindowSize();
    
    return (
      <>
      {
          width < 440 && toggle ? <ContentLogin setToggle={setToggle}/> : <ContentFormLogin />
      }
      </>
  );
};
