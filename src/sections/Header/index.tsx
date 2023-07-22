import { useContext } from 'react'
import logoImage from '../../assets/images_robust/logo.png'

import { HeaderContainer, HeaderStyled, MenuIcon } from './style'
import { IsMenuOpenContext } from '../../context/menu.context'

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext)

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <HeaderStyled>
      <HeaderContainer>
        <MenuIcon size={80}  color='#FFF' onClick={handleOpenMenu}/>
        <img src={logoImage} alt="Logo Robust Habit" />
        <div>
          <nav>
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
          </nav>
          <span>registre-se</span>
        </div>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header
