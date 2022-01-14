import styled from "styled-components";

export const ContentHistory = styled.div`
  width: 100%;
  height: 85vh;

  .container {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 97%;

    .header {
      margin-left: 2rem;
      margin-right: 2rem;
      text-align: justify;

      h4 {
        font-family: DM Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        margin-top: 5rem;
        margin-bottom: 1rem;
        color: ${ ({ theme }) => theme.isDark ? '#FEFEFE' : '#161617' };
      }
    }
  }

  .containerInfo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 1rem 1rem 1rem;
    overflow: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar{
        display: none;
    }
  }

  @media (max-width: 1024px) {
    .containerInfo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    overflow: auto;
    
    }
  }

  @media (max-width: 420px) {
    .containerInfo {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      /* z-index: -1; */
      height: 100%;
      position: relative;
    overflow: auto;
    -webkit-overflow-scrolling:touch;
    }
  }
`;

export const HistoryInfo = styled.article`
  display: grid;
  grid-template-columns: 5fr 1fr;
  background: ${ ({theme}) => theme.isDark ? '#212135' : '#FFFFFF' };
  border-radius: 12px;
  margin: 0 1rem 1rem;
  width: 90%;
  height: 7rem;

  div {
    align-self: center;
    justify-self: center;
  }
  
  .imageSport {
    width: 100%;
    height: 7rem;
    border-radius: 12px;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 420px) {
    /* margin: 0 2rem 1rem 2rem; */
  }
`;
