import { styled } from 'styled-components'
import { BiMenuAltLeft } from 'react-icons/bi'

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
  position: relative;

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

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  span {
    padding: 8px 0px 8px 30px;
    background-color: ${colors.secondary};
    position: relative;
    width: 157px;
    height: 44px;
    margin-right: 25px;
    position: relative;
    cursor: pointer;
    clip-path: polygon(82% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
    transition: clip-path 0.5s ease;

    &:hover {
      clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
    }
  }

  @media (max-width: 1300px) {
    ul li a{
      font-size: 16px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size:  16px;
      width: 110px;
      height: 40px;
      padding: 0;

    }
  }

  @media (max-width: 767px) {

    img {
      width: 80px;
      height: 40px;
    }

    nav {
      display: none;
    }
  }
`

export const MenuIcon = styled(BiMenuAltLeft)`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: absolute;
    top: 65px;
    left: -10px;
}
`