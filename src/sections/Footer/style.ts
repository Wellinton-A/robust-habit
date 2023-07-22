import { styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const FooterSection = styled.footer`
  height: 254px;
  background-color: ${colors.main};
`

export const ContainerFooter = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 100px;
    height: 60px;
    margin-top: 50px;
  }

  .iconContainer {
    margin-left: 16px;
    margin-top: 16px;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 16px;
    cursor: pointer;
  }

  p {
    text-align: center;
    color: ${colors.white};
    font-family: ${fonts.montserrat};
    font-size: 12px;
    margin-top: 16px;
  }
`
