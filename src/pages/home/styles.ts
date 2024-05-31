import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HeroContainer = styled.div`
  position: relative;

  img#herobg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 130%;
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 1rem;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }
`
export const HeroContent = styled.div`
  max-width: 89rem;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;
`
export const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
