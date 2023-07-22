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
      <div className='iconHolder'>
        <img className='icon' src={icon} alt={alt} />
      </div>
      <h4>{title}</h4>
      <p>{about}</p>
      <button>
        {more}
        <img src={arrow} alt="arrow icon" />
      </button>
    </CardContainer>
  )
}

export default AboutCard
