import { keyframes, styled } from 'styled-components'
import { colors, fonts } from '../../global-style/global.style'

export const MarqueeSection = styled.section`
  height: 56px;
  background-color: ${colors.secondary};
  color: ${colors.white};
  font-family: ${fonts.bebas};
  font-size: 32px;

  img {
    width: 45px;
    height: 45px;
    margin: 0 40px;
  }

  @media (max-width: 1620px) {
    font-size: 24px;
  }

  @media (max-width: 1400px) {
    font-size: 20px;

    img {
      margin: 0 20px;
    }
  }

  @media (max-width: 1080px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 12px;

    img {
      width: 20px;
      height: 20px;
      margin: 0 20px;
    }
  }

  @media (max-width: 510px) {
    font-size: 8px;
    height: 40px;

    img {
      width: 15px;
      height: 15px;
      margin: 0 10px;
    }
  }
`

export const MarqueeContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const MarqueeAnimation = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`

export const MarqueeText = styled.div`
  width: 200%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  animation: ${MarqueeAnimation} 10s linear infinite;
`

export const MarqueeSpan = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  float: left;
  width: 50%;
`
