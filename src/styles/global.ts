import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: 0;
}

body{
  background: ${(props) => props.theme.background};
 -webkit-font-smoothing: antialiased;
 font-family: 'Baloo 2', sans-serif;
 
}
input textarea button span{
  font-family:'Roboto' sans-serif ;
}
`
