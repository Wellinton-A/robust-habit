import { styled } from 'styled-components'
import { colors } from '../../global-style/global.style'

type Props = {
  fontFamily: string
  fontSize: string
  margin?: string
}

export const TittleStyled = styled.span<Props>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  color: ${colors.white};
  margin-right: ${(props) => props.margin};
  max-height: 130px;

  @media (max-width: 1300px) {
    font-size: 62px;
  }
`
