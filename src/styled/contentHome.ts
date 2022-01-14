import styled from "styled-components";

export const ContentHome = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  height: 85vh;

  .containerCards{
    display: flex;
    position: relative;
    justify-content: center;
    height: 70%;
  }

  .CardSports {
    position: absolute;
    width: 25rem;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;

    div {
      touch-action: none;
      background-color: white;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      /* max-width: ; */
      height: 100%;
      max-height: 570px;
      will-change: transform;
      border-radius: 5px 5px 30px 30px;
    }

    .IconGreen {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 50px;
      height: 50px;
      right: 2rem;
      top: 22px;
      background: rgba(34, 34, 67, 0.2);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-radius: 18px;

      img {
        width: 1.5rem;
      }
    }

    section {
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100px;
      align-self: flex-end;

      background: linear-gradient(
        360deg,
        #000000 0%,
        #000000 58.85%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 0 0 30px 30px;

      h4 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        margin-left: 1rem;
        margin-top: 4rem;
        color: #FEFEFE
      }
    }
  }

  .buttons{
    display: flex;
    justify-content: center;
    /* align-self: flex-end; */
    margin: 3rem;
  }

  @media (max-width: 420px) {
    .CardSports {
      width: 100%;
      height: 100%;
    }
  }
`;
