import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => (theme ? "#181828" : "#F3F3F3")};
    color: ${({ theme }) => (theme ? "#FEFEFE" : "#232232")};
}

`;
