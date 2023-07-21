import { keyframes, styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const ContactSection = styled.section`
  height: 468px;
  background-color: ${colors.secondary};
`

export const ContactContainer = styled(Container)`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: ${colors.white};

  .bodyWomanImage {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .containerForm {
    max-width: 780px;
    margin-top: 70px;

    p {
      font-size: 24px;
      font-family: ${fonts.montserrat};
      margin-top: 30px;
    }

    form {
      max-width: 500px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      input {
        width: 234px;
        height: 42px;
        background-color: transparent;
        outline: none;
        color: ${colors.white};
        font-family: ${fonts.montserrat};
        font-size: 18px;
        padding: 10px 18px;
        border: 1px solid ${colors.white};

        &::placeholder {
          text-transform: uppercase;
        }
      }

      button {
        width: 204px;
        height: 42px;
        margin-top: 20px;
        padding: 2px;
        font-family: ${fonts.montserrat};
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        position: relative;
        color: ${colors.white};
        background-color: ${colors.contactButtonColor};
        border: none;
        cursor: pointer;

        &:before {
          content: '';
          position: absolute;
          right: -30px;
          bottom: 0;
          width: 0;
          height: 0;
          border-left: 30px solid ${colors.contactButtonColor};
          border-top: 17px solid transparent;
          border-bottom: 25px solid ${colors.contactButtonColor};
        }
      }
    }
  }
`

const spinAnimation = keyframes`
  0% { transform: rotate(360deg) }
`

export const SpinnerInner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid ${colors.white};
  border-top-color: ${colors.secondary};
  animation: ${spinAnimation} 1.5s infinite linear;
`

export const SpinnerContainer = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
  animation: ${spinAnimation} 2s infinite linear;
  margin-left: 150px;
`
