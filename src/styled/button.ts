import styled from "styled-components";

export const Button = styled.button`
  align-items: center;

  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 20px;
  border-color: transparent;

  color: #fefefe;

  cursor: pointer;

  display: flex;

  flex-direction: row;
  height: 50px;
  justify-content: center;
  left: 30px;
  padding: 22px 38px;

  top: 545px;
  width: 100px;

  &:hover {
    background: linear-gradient(99deg, #1e5fe4 6.69%, #0c45ba 80.95%);
  }
`;

export const LikeButton = styled.button`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: transparent;
  border-radius: 50%;
  cursor: pointer;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  margin: 0.5rem;
  transition: 0.2s ease-in 0s;
  z-index: 0;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

export const DislikeButton = styled.button`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: transparent;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => (theme.isDark ? "#222243" : "#FFFFFF")};
  margin: 0.5rem;
  z-index: 0;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`;

export const LogoutButton = styled(Button)`
  background: linear-gradient(99deg, #b91818 6.69%, #8b1111 80.95%);
  box-shadow: 0px 4px 30px rgb(169 25 25 / 55%);
  width: 10rem;

  &:hover {
    background: linear-gradient(99deg, #9b1616 6.69%, #640c0c 80.95%);
  }

  &:active {
    background: linear-gradient(99deg, #912c2c 6.69%, #852d2d 80.95%);
  }
`;
