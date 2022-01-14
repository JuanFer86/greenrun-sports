import styled from "styled-components";

export const ToggleTheme = styled.button`
background: ${({ theme }) => theme ? '#F3F3F3' : '#181828'};

backdrop-filter: blur(20px);

border: transparent;
border-radius: 10px;

z-index:2;


cursor: pointer;

height: 35px;

margin: 2rem;

opacity: 1;

position: absolute;

width: 35px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 1;
}
`