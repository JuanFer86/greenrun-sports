import styled, { css } from "styled-components";

export const ListItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  /* background: ${({ isSelected }) => (isSelected ? "#1F1F31" : "none")}; */
  ${({ theme, isSelected }) =>
    theme.isDark &&
    css`
      background: ${isSelected ? "#1F1F31" : "none"};
    `}
  border-radius: 16px;

  &:focus {
    background: #1f1f31;
  }

  .navIcons {
    ${({ theme, isSelected }) =>
      theme.isDark
        ? css`
            fill: ${isSelected ? "#FFFFFF" : "#181828"};
          `
        : css`
            fill: ${isSelected ? "#1A5BE1" : "#EDEDED"};
          `}

    &:focus {
      fill: #ffffff;

      ${({ theme, isSelected }) =>
        theme.isDark
          ? css`
              fill: ${isSelected ? "#FFFFFF" : "#181828"};
            `
          : css`
              fill: ${isSelected ? "#1A5BE1" : "#EDEDED"};
            `}
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;

  section {
    width: 20rem;

    background: ${({ theme }) => (theme.isDark ? "#2c2b3e" : "#FFFFFF")};
    border-radius: 24px;

    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      padding: 0 1rem;
    }
  }
`;
