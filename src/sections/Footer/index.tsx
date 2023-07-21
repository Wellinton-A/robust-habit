import logo from '../../assets/images_robust/logo.png'
import instagram from '../../assets/images_robust/icons8-instagram.svg'
import facebook from '../../assets/images_robust/icons8-facebook.svg'
import twitter from '../../assets/images_robust/icons8-twitter.svg'

import { ContainerFooter, FooterSection } from './style'

const Footer = () => {
  return (
    <FooterSection>
      <ContainerFooter>
        <img className="logo" src={logo} alt="logo RObust habit" />
        <div className="iconContainer">
          <img className="icon" src={instagram} alt="instagram icon" />
          <img className="icon" src={facebook} alt="facebook icon" />
          <img className="icon" src={twitter} alt="twitter icon" />
        </div>
        <p>
          A Robust Habit é uma plataforma para contratacao de serviços, e
          disponibilidade de espaço para exercícios físicos.
        </p>
      </ContainerFooter>
    </FooterSection>
  )
}

export default Footer
