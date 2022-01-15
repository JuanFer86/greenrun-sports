import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    padding-bottom: 5rem;
  }

  h4 {
    color: ${({ theme }) => (theme.isDark ? "#FEFEFE" : "#161617")};
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 122.02%;
    margin: 0;
    margin-top: 2rem;
    text-align: center;
  }

  p {
    font-family: Epilogue;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 148.02%;
    margin: 0;
    margin-bottom: 1rem;
    text-align: center;
    width: 15rem;
  }

  .link-forgot {
    color: ${({ theme }) => (theme.isDark ? "#FEFEFE" : "#232232")};
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 122.02%;
    margin-top: 1rem;
    text-decoration: none;
    align-self: flex-start;
  }

  .btn-login {
    margin-top: 1rem;
    align-self: flex-start;
  }

  @media (max-width: 840px) {
    .container-form {
      width: 40%;
    }
  }

  @media (max-width: 660px) {
    .container-form {
      width: 50%;
    }
  }

  @media (max-width: 440px) {
    .container-form {
      width: 80%;
    }
  }
`;
