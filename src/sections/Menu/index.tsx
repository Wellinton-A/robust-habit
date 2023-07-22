import { useContext } from "react"
import { CloseIcon, MenuSection } from "./style"
import { IsMenuOpenContext } from "../../context/menu.context"

const MenuMobile = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext)

  const handleCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuSection isMenuOpen={isMenuOpen.toString()}>
      <CloseIcon onClick={handleCloseMenu} size={40} color="#fff"/>
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
    </MenuSection>
  )
}

export default MenuMobile