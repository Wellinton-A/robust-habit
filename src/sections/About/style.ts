import { styled } from 'styled-components'
import { Container, colors } from '../../global-style/global.style'

export const AboutSection = styled.section`
  background-color: ${colors.main};
  height: 865px;
`

export const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-top: 180px;
  }

  .cardsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 108px;
  }
`
