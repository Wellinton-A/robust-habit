import { styled } from "styled-components";
import { IoCloseSharp } from 'react-icons/io5'

import { colors, fonts } from "../../global-style/global.style";

type Props = {
  isMenuOpen: string
}

export const MenuSection = styled.div<Props>`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: ${colors.main};
  opacity: 0.95;
  z-index: 5;
  display: ${(props) => props.isMenuOpen === 'true' ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  nav {
    z-index: 5;

    ul li a {
      color: ${colors.white};
      font-size: 40px;
      font-family: ${fonts.bebas};
    }
  }
`

export const CloseIcon = styled(IoCloseSharp)`
  position: absolute;
  top: 85px;
  right: 40px;
`