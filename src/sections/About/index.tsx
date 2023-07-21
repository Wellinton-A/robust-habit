import { useState } from 'react'

import AboutCard from '../../components/About-cards'
import Title from '../../components/Title'

import { fonts } from '../../global-style/global.style'
import { AboutContainer, AboutSection } from './style'
import { aboutData } from '../../assets/data/data'

export type AboutCardType = {
  title: string
  icon: string
  about: string
  more: string
  alt: string
}

const About = () => {
  const [about] = useState<AboutCardType[]>(aboutData)

  return (
    <AboutSection>
      <AboutContainer>
        <div className="title">
          <Title margin="27px" fontFamily={fonts.bungee} fontSize="62px">
            nossos
          </Title>
          <Title fontFamily={fonts.bebas} fontSize="82px">
            diferenciais
          </Title>
        </div>
        <div className="cardsContainer">
          {about?.map((item: AboutCardType) => (
            <AboutCard key={item.title} aboutCard={item} />
          ))}
        </div>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
