import { styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const HeroSection = styled.section`
  height: 700px;
  background-color: ${colors.main};
`

export const HeroContainer = styled(Container)`
  width: 1280px;
  height: 700px;
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: transparent;

  .bodyImage {
    width: 477px;
    height: 627px;
    position: absolute;
    right: 60px;
    bottom: -1px;
    background-color: transparent;
  }

  .image {
    background-color: transparent;
    height: 710px;
    position: absolute;
    top: 0;
    right: -80px;
  }

  p {
    font-family: ${fonts.montserrat};
    color: ${colors.white};
    font-size: 18px;
    max-width: 690px;
    margin-bottom: 28px;
  }
`

export const InfoContainer = styled.div`
  margin-top: 214px;
  height: 272px;

  .titleClass {
    display: flex;
    flex-direction: column;
  }
`

export const SpanStyled = styled.span`
  font-size: 32px;
  font-family: ${fonts.bebas};
  color: ${colors.white};
  background-color: ${colors.secondary};
  width: 187px;
  height: 54px;
  padding: 8px 0 8px 24px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    right: -30px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 30px solid ${colors.secondary};
    border-top: 30px solid transparent;
    border-bottom: 25px solid ${colors.secondary};
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 12px;
  }
`
