import { styled } from 'styled-components'

import { Container, colors } from '../../global-style/global.style'

export const PlansSection = styled.section`
  height: 660px;
  background-color: ${colors.secondary};

  @media (max-width: 1300px) {
    height: fit-content;
  }
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
    gap: 40px;
    margin-top: 60px;
  }

  @media (max-width: 1300px) {
    .cardsContainerPlans {
      display: block;
      margin-top: 30px;
      max-width: 80%;
    }
  }
`
