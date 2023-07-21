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
