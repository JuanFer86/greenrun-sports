import styled from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  bottom: 0;
  margin: auto;
  width: 8rem;
  height: 8rem;
  z-index: 1000;

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: rgba(24, 24, 40, 0.24);
    width: 100%;
    height: 100%;
  }

  .second {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(24, 24, 40, 0.6);
    border-radius: 100%;
    width: 60%;
    height: 60%;
  }

  .third {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(24, 24, 40, 0.8);
    border-radius: 100%;
    width: 50%;
    height: 50%;
  }

  .containerLike {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 8rem;
    height: 8rem;
    z-index: 1000;
    width: 4rem;
    height: 4rem;
    border: transparent;
    border-radius: 50%;
    background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
    /* margin: 0.5rem; */
  }
`;
