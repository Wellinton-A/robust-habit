import { styled } from 'styled-components'
import { colors, fonts } from '../../global-style/global.style'

export const CardContainer = styled.div`
  width: 320px;
  height: 346px;
  background-color: transparent;
  color: ${colors.white};
  padding: 24px 0 30px 24px;

  &:hover {
    background-color: ${colors.secondary};
    transition: background-color 0.9s ease;
  }

  &:hover span {
    background-color: ${colors.red};
    transition: background-color 0.9s ease;

    &:before {
      border-left: 30px solid ${colors.red};
      border-top: 29px solid transparent;
      border-bottom: 25px solid ${colors.red};
      transition: border-left 0.9s ease, border-top 0.9s ease,
        border-bottom 0.9s ease;
    }
  }

  .icon {
    width: 77px;
    height: 77px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: ${fonts.bebas};
    font-size: 28px;
    margin-bottom: 11px;
  }

  p {
    font-family: ${fonts.montserrat};
    font-size: 18px;
    margin-bottom: 27px;
  }

  span {
    display: flex;
    font-size: 16px;
    font-family: ${fonts.bebas};
    color: ${colors.white};
    background-color: ${colors.secondary};
    max-width: 157px;
    height: 54px;
    padding: 8px 0 8px 15px;
    position: relative;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;

    &:before {
      content: '';
      position: absolute;
      right: -30px;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 30px solid ${colors.secondary};
      border-top: 29px solid transparent;
      border-bottom: 25px solid ${colors.secondary};
    }

    img {
      width: 20px;
      height: 20px;
      margin-left: 12px;
    }
  }
`
