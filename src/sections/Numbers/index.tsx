import { NumberContainer, NumberSection } from './style'

import { fonts } from '../../global-style/global.style'

import rec1 from '../../assets/images_robust/Rectangle16.png'
import rec2 from '../../assets/images_robust/Rectangle17.png'
import rec3 from '../../assets/images_robust/Rectangle18.png'
import body from '../../assets/images_robust/pngwing2.png'
import Title from '../../components/Title'

const Numbers = () => {
  return (
    <NumberSection>
      <NumberContainer>
        <img className="imagesRec3" src={rec3} alt="Retangulo" />
        <img className="imagesRec2" src={rec2} alt="Retangulo" />
        <img className="imagesRec1" src={rec1} alt="Retangulo" />
        <img className="bodyImg" src={body} alt="homem e mulher asteric" />
        <div className="infos">
          <div>
            <Title fontFamily={fonts.bungee} fontSize="62px">
              {'faça parte '}
            </Title>
            <Title fontFamily={fonts.bebas} fontSize="82px">
              {'da família'}
            </Title>
          </div>
          <p>
            Nossa academia tem milhares de clientes satisfeitos com resultados
            surpreendentes. Junte-se a nós e comece a transformar seu corpo
            agora!
          </p>
          <div className="cardContainerInfo">
            <div className="card">
              <span>+15</span>
              <span>Unidades na cidade de São Paulo.</span>
            </div>
            <div className="card">
              <span>+2000</span>
              <span>Alunos matriculados em nossas unidades.</span>
            </div>
            <div className="card">
              <span>+100</span>
              <span>Professores altamente qualificados.</span>
            </div>
          </div>
        </div>
      </NumberContainer>
    </NumberSection>
  )
}

export default Numbers
