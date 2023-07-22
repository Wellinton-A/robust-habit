import { styled } from 'styled-components'
import { colors, fonts } from '../../global-style/global.style'

export const CardContainer = styled.div`
  width: 320px;
  height: 346px;
  background-color: transparent;
  color: ${colors.white};
  padding: 24px 10px 30px 24px;
  transition: background-color 0.9s ease-in-out;

  &:hover {
    background-color: ${colors.secondary};

    button {
      background-color: ${colors.red};
    }

    .icon {
      width: 80px;
      height: 80px;
    }
  }

  .iconHolder {
    max-width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .icon {
    width: 77px;
    height: 77px;
    margin-bottom: 10px;
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
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

  button {
    display: flex;
    font-size: 16px;
    font-family: ${fonts.bebas};
    color: ${colors.white};
    background-color: ${colors.secondary};
    max-width: 187px;
    height: 54px;
    padding: 8px 32px 8px 15px;
    position: relative;
    cursor: pointer;
    align-items: center;
    border: none;
    justify-content: space-between;
    clip-path: polygon(82% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
    transition: clip-path 0.5s ease, background-color 0.9s ease;

    &:hover {
      clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
    }

    img {
      width: 20px;
      height: 20px;
      margin-left: 12px;
    }
  }
`
