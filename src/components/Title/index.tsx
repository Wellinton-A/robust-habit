import { TittleStyled } from './style'

type Props = {
  fontFamily: string
  fontSize: string
  children: string
  margin?: string
}

const Title = ({ fontFamily, fontSize, margin, children }: Props) => {
  return (
    <TittleStyled margin={margin} fontFamily={fontFamily} fontSize={fontSize}>
      {children}
    </TittleStyled>
  )
}

export default Title
