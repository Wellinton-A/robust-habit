import logoImage from '../../assets/images_robust/logo.png'
import { HeaderContainer, HeaderStyled } from './style'

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <img src={logoImage} alt="Logo Robust Habit" />
        <div>
          <ul>
            <li>
              <a href="#sobre">sobre</a>
            </li>
            <li>
              <a href="#servicos">serviços</a>
            </li>
            <li>
              <a href="#precos">preços</a>
            </li>
            <li>
              <a href="#equip">equipamentos</a>
            </li>
          </ul>
          <span>registre-se</span>
        </div>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header
