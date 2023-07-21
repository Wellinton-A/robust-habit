import { CardContainer } from './style'
import arrow from '../../assets/images_robust/Arrow1.png'
import { AboutCardType } from '../../sections/About'

type Props = {
  aboutCard: AboutCardType
}

const AboutCard = ({ aboutCard }: Props) => {
  const { title, icon, about, more, alt } = aboutCard
  return (
    <CardContainer>
      <img src={icon} alt={alt} />
      <h4>{title}</h4>
      <p>{about}</p>
      <span>
        {more}
        <img src={arrow} alt="arrow icon" />
      </span>
    </CardContainer>
  )
}

export default AboutCard
