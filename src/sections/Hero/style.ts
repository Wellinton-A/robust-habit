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

  @media (max-width: 1440px) {
    .image {
      right: -10px;
    }
  }

  @media (max-width: 1300px) {

    .bodyImage {
      max-height: 350px;
      max-width: 268px;
    }

    .image {
      max-width: 110%;
      right: -30px;
    }

    p {
      margin-top: 60px;
      max-width: 300px;
    }
  }

  @media (max-width: 1300px) {

    .bodyImage {
      max-height: 350px;
      max-width: 268px;
    }

    .image {
      max-width: 100%;
      right: -30px;
    }

    p {
      max-width: 300px;
    }
  }
`

export const InfoContainer = styled.div`
  margin-top: 214px;
  display: flex;
  flex-direction: column;

  .titleClass {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1300px) {
    position: absolute;
    margin-top: 80px;
  }
`

export const SpanStyled = styled.span`
  display: block;
  font-size: 32px;
  font-family: ${fonts.bebas};
  color: ${colors.white};
  background-color: ${colors.secondary};
  width: 187px;
  height: 54px;
  padding: 8px 0 8px 24px;
  position: relative;
  cursor: pointer;
  clip-path: polygon(82% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
  transition: clip-path 0.5s ease;

  &:hover {
    clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 12px;
  }
`
