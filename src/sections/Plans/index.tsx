import { useState } from 'react'
import PlanCard from '../../components/Plan-cards'
import Title from '../../components/Title'
import { fonts } from '../../global-style/global.style'
import { PlansContainer, PlansSection } from './style'
import { plansData } from '../../assets/data/data'

export type PlansType = {
  plan: string
  photo: string
  payment: string
  price: number
  alt: string
  recommended: boolean
}

const Plans = () => {
  const [plans] = useState<PlansType[]>(plansData)

  return (
    <PlansSection>
      <PlansContainer>
        <div className="titlePlan">
          <Title fontFamily={fonts.bebas} fontSize="82px">
            Nossos planos
          </Title>
        </div>
        <div className="cardsContainerPlans">
          {plans?.map((item: PlansType) => (
            <PlanCard key={item.plan} planData={item} />
          ))}
        </div>
      </PlansContainer>
    </PlansSection>
  )
}

export default Plans
