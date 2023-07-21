import dumbbell from '../../assets/images_robust/icons8-barbell-642.png'
import {
  MarqueeContainer,
  MarqueeSection,
  MarqueeSpan,
  MarqueeText
} from './style'

const Marquee = () => {
  return (
    <MarqueeSection>
      <MarqueeContainer>
        <MarqueeText>
          <MarqueeSpan>
            consultoria individual
            <img src={dumbbell} alt="dumbell icon" />
            +20 professores
            <img src={dumbbell} alt="dumbell icon" />
            treine da sua forma
            <img src={dumbbell} alt="dumbell icon" />
            +15 unidades
            <img src={dumbbell} alt="dumbell icon" />
            montamos seu treino
            <img src={dumbbell} alt="dumbell icon" />
          </MarqueeSpan>
          <MarqueeSpan>
            consultoria individual
            <img src={dumbbell} alt="dumbell icon" />
            +20 professores
            <img src={dumbbell} alt="dumbell icon" />
            treine da sua forma
            <img src={dumbbell} alt="dumbell icon" />
            +15 unidades
            <img src={dumbbell} alt="dumbell icon" />
            montamos seu treino
            <img src={dumbbell} alt="dumbell icon" />
          </MarqueeSpan>
        </MarqueeText>
      </MarqueeContainer>
    </MarqueeSection>
  )
}

export default Marquee
