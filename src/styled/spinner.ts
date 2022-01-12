import styled, { keyframes } from "styled-components";

const animations = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`

  display: flex;
  align-items: center;
  position: relative;
  width: 1rem;
  height: 1rem;

div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  /* margin: 8px; */
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${ animations } 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
div:nth-child(1) {
  animation-delay: -0.45s;
}
div:nth-child(2) {
  animation-delay: -0.3s;
}
div:nth-child(3) {
  animation-delay: -0.15s;
}

`;
