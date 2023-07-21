import { styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 90px;
  width: 100%;
  background-color: transparent;
  z-index: 2;
`

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${fonts.bebas};
  color: ${colors.white};
  font-size: 24px;
  background-color: transparent;

  div {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  img {
    width: 100px;
    height: 60px;
  }

  ul {
    display: flex;
    background-color: transparent;

    li {
      background-color: transparent;

      a {
        font-family: ${fonts.bebas};
        color: ${colors.white};
        font-size: 24px;
        margin-right: 30px;
        background-color: transparent;
      }
    }
  }

  span {
    padding: 8px 0px 8px 30px;
    background-color: ${colors.secondary};
    position: relative;
    width: 127px;
    height: 44px;
    margin-right: 25px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      right: -25px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 25px solid ${colors.secondary};
      border-top: 19px solid transparent;
      border-bottom: 25px solid ${colors.secondary};
    }
  }
`
