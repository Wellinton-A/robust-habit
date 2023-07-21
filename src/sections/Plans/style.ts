import { styled } from 'styled-components'

import { Container, colors } from '../../global-style/global.style'

export const PlansSection = styled.section`
  height: 660px;
  background-color: ${colors.secondary};
`

export const PlansContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .titlePlan {
    margin-top: 80px;
  }

  .cardsContainerPlans {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 60px;
  }
`
