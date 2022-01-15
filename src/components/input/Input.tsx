import React, { ChangeEvent, FC, useContext, useRef } from "react";
import AppContext from "../../context/AppContext";
import { InputStyled } from "../../styled";

//preguntar type para el setter
interface InputProps {
    id?: string | number
  label?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number
  name?: string
}

export const Input: FC<InputProps> = ({ id = 'input', label, type = "text", onChange = () => {}, value, name }) => {

  const {state} = useContext(AppContext)

    const divRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = (): void => {
        divRef.current?.classList.add('active');
    }

    const handleBlur = (): void => {
        !value && divRef.current?.classList.remove('active');
    }

  return (
    <InputStyled theme={{ isDark: state.theme}} ref={divRef} onFocus={handleFocus} onBlur={handleBlur} className="color-inputStyled" >
      <label htmlFor={ `${id}-${label}` }  >{label}</label>
      <input ref={inputRef} name={name} autoComplete="off" id={`${id}-${label}`} type={type} onFocus={handleFocus} onBlur={handleBlur} value={value} onChange={onChange} />
    </InputStyled>
  );
};
