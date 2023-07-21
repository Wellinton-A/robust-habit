import ret1 from '../../assets/images_robust/Rectangle3.png'
import ret2 from '../../assets/images_robust/Rectangle4.png'
import ret3 from '../../assets/images_robust/Rectangle5.png'
import body1 from '../../assets/images_robust/pngwing1.png'
import arrow from '../../assets/images_robust/Arrow1.png'

import Title from '../../components/Title'
import { fonts } from '../../global-style/global.style'
import { HeroContainer, HeroSection, InfoContainer, SpanStyled } from './style'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <img className="image" src={ret1} alt="retangulo" />
        <img className="image" src={ret2} alt="retangulo" />
        <img className="image" src={ret3} alt="retangulo" />
        <InfoContainer>
          <div className="titleClass">
            <Title fontFamily={fonts.bungee} fontSize="82px">
              aqui não se
            </Title>
            <Title fontFamily={fonts.bebas} fontSize="102px">
              treina fofo
            </Title>
          </div>
          <p>
            Transforme-se na nossa academia! Oferecemos equipamentos modernos,
            instrutores qualificados e aulas para todos os níveis. Alcance seus
            objetivos fitness conosco. Experimente hoje!
          </p>
          <SpanStyled>
            começar <img src={arrow} alt="arrow icon" />
          </SpanStyled>
        </InfoContainer>
        <img className="bodyImage" src={body1} alt="Bodybuilder" />
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero
