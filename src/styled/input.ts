import styled from "styled-components";

export const InputStyled = styled.div`
  background: ${({ theme }) => (theme.isDark ? "#2f2f43" : "#FEFEFE" )};
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-sizing: border-box;
  border-radius: 10px;
  border: none;

  font-size: 16px;

  padding: 0 8px;

  position: relative;

  height: 55px;

  margin: 0.3rem;

  outline: 0;

  width: 100%;

  input {
    background: ${({ theme }) => (theme.isDark ? "#2f2f43" : "#FEFEFE" )};
    border: none;
    outline: 0;
    padding: 27px 0 10px;
    width: 100%;
    color: ${({ theme }) => (theme.isDark ? "#FEFEFE" : "#161617")};

    &::focus {
      background: ${({ theme }) => (theme.isDark ? "#2f2f43" : "#FEFEFE" )};
      color: ${({ theme }) => (theme.isDark ? "#2f2f43" : "#FEFEFE" )};
    }
  }

  label {
    font-size: 14px;
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 16px) scale(1);
    transition: all 0.1s ease-in-out;

    /* &.active{
        transform: translate(0, 4px) scale(.75);
    } */
  }

  &.active {
    label {
      transform: translate(0, 4px) scale(0.75);
    }
  }
`;
