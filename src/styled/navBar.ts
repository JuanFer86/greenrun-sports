import styled, { css } from "styled-components";

export const ListItem = styled.li<{ isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background: ${({ isSelected }) => isSelected ? '#1F1F31' : 'none' };
    border-radius: 16px;
    
    &:focus {
        background: #1F1F31;
    }

    .navIcons {
      fill: ${({ isSelected }) => isSelected ? '#FFFFFF' : '#181828' };;
      
      &:focus{
          fill: #FFFFFF;

      }
    }
`;


export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;

  section {
    width: 20rem;

    background: #2c2b3e;
    border-radius: 24px;

    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      padding: 0 1rem;
    }
  }
`;