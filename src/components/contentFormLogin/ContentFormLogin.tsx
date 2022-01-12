import React, { FC, FormEvent, useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input } from "..";
import AppContext from "../../context/AppContext";
import { auth } from "../../firebase-config";
import { useForm } from "../../helpers";
import { types } from "../../helpers/types";
import { Button, FormLogin, Spinner, TextDanger } from "../../styled";
import contentFormLogin from "../../data/login.json";
import { createCookie } from "../../helpers/cookies";

const ContentFormLogin: FC = () => {
  const [feedBack, setFeed] = useState({ error: false, loading: false });

  const [values, handleChange] = useForm({ email: "", pass: "" });

  const { contentFormLogin: data } = contentFormLogin;

  const { state, dispatch } = useContext(AppContext);

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //     setvalues((val) => ({ ...val, [e.target.name]: e.target.value }));
  //   };

  const handleSubmit = (e: FormEvent) => {
    // navigate("/");
    e.preventDefault();

    setFeed( feed => ({ ...feed, error:false, loading: true }) );

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((resp: any) => {
        const {
          user: { accessToken },
        } = resp;

        createCookie("_t", accessToken);

        setFeed( feed => ({ ...feed, loading: false }) );

        dispatch({
          type: types.login,
          payload: {},
        });
      })
      .catch(() => setFeed( feed => ({ ...feed, error: true, loading: false }) ));
  };

  return (
    <FormLogin theme={state.theme} onSubmit={handleSubmit}>
      <div className="container-form">
        <h4>{data.title as string}</h4>
        <p>{data.description as string}</p>
        {
          feedBack.error && <TextDanger >{data.errorText as string}</TextDanger>
        }

        <Input
          label={data.inputUser as string}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          label={data.inputPass as string}
          type="password"
          name="pass"
          value={values.pass}
          onChange={handleChange}
        />

        <a
          href="http://"
          target="_blank"
          className="link-forgot"
          rel="noopener noreferrer"
        >
          {data.forgot}
        </a>

        <Button className="btn-login" type="submit">
          {
            feedBack.loading ? <Spinner > <div></div><div></div><div></div><div></div> </Spinner> : data.btnLogin as string
          }
        </Button>
      </div>
    </FormLogin>
  );
};

export default ContentFormLogin;
