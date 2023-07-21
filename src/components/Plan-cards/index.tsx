import { PlansType } from '../../sections/Plans'
import { parseToBrl } from '../../utils/utils'

import { CardContainerPlan, ValuesContainer } from './style'

type Props = {
  planData: PlansType
}

const PlanCard = ({ planData }: Props) => {
  const { plan, payment, photo, price, alt, recommended } = planData

  const priceBrl = parseToBrl(price)

  return (
    <CardContainerPlan recommended={recommended.toString()}>
      <div className="recommended">Recomendado por usuarios</div>
      <img src={photo} alt={alt} />
      <div className="passPlan">{plan}</div>
      <ValuesContainer recommended={recommended.toString()}>
        <div>
          <span className="infos">{payment}</span>
          {price > 0 && <span className="price">{priceBrl}</span>}
        </div>
        <span className="select">selecionar</span>
      </ValuesContainer>
    </CardContainerPlan>
  )
}

export default PlanCard
