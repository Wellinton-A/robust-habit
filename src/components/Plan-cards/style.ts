import { styled } from 'styled-components'
import { colors, fonts } from '../../global-style/global.style'

type Props = {
  recommended: string
}

export const CardContainerPlan = styled.div<Props>`
  align-self: last baseline;
  width: 400px;
  background-color: transparent;
  height: 362px;
  color: ${colors.white};

  .recommended {
    display: ${(props) => (props.recommended === 'true' ? 'flex' : 'none')};
    font-size: 18px;
    font-family: ${fonts.montserrat};
    font-weight: bold;
    text-transform: uppercase;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${colors.red};
  }

  img {
    display: block;
    width: 100%;
  }

  .passPlan {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${(props) =>
      props.recommended === 'true' ? colors.red : colors.black};
    font-family: ${fonts.bebas};
    font-size: 42px;
    padding: 10px 0 10px 21px;
  }
`

export const ValuesContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  height: 82px;
  background-color: ${colors.grey};
  color: ${colors.greyLetters};
  font-family: ${fonts.montserrat};
  font-size: 24px;

  .infos {
    display: flex;
    flex-direction: column;
  }

  .price {
    color: ${colors.white};
    font-weight: bold;
  }

  .select {
    padding: 14px 7px;
    font-size: 18px;
    font-weight: bold;
    border: solid 1px
      ${(props) =>
        props.recommended === 'true' ? colors.red : colors.greyLetters};
    border-radius: 50px;
    color: ${(props) =>
      props.recommended === 'true' ? colors.red : colors.greyLetters};
    text-transform: uppercase;
    cursor: pointer;
  }
`
