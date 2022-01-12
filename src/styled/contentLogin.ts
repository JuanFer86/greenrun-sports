import styled from "styled-components";

export const ContentLogin = styled.div`
  display: flex;
  height: 100vh;

  .presentation {
    position: absolute;
    width: 100%;
    height: 17rem;
    left: 0px;
    bottom: 0;
    background: #2c2b3e;
    border-radius: 36px 36px 0 0;

    h4 {
    /* color: ${({ theme }) => (theme ? "#FEFEFE" : "#161617")}; */
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 122.02%;
    margin: 2rem 1.5rem 0 1.5rem;
    /* margin-top: 2rem; */
    /* margin-left: 1rem; */
    text-align: justify;
  }

  p {
    font-family: Epilogue;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 148.02%;
    margin: 0.5rem 1.5rem 1rem 1.5rem;
    /* margin-bottom: 1rem;
    margin-left: 1rem; */
    text-align: justify;
    width: 15rem;
  }

  button{
      margin-left: 1rem;
  }

  }
  
`;
