import styled from 'styled-components'

export const HeaderConatiner = styled.header`
  padding: 2rem 14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  aside {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      background-color: ${(props) => props.theme.yellowLight};
      color: ${(props) => props.theme.yellowDark};

      padding: 10px;
      border-radius: 8px;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    background: ${(props) => props.theme.purplelight};

    padding: 10px;
    border-radius: 8px;

    color: ${(props) => props.theme.purple};
    svg {
      color: ${(props) => props.theme.purple};
    }
    font-family: 'Roboto', sans-serif;
  }
`
