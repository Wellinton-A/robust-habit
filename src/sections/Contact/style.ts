import { keyframes, styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const ContactSection = styled.section`
  height: 468px;
  background-color: ${colors.secondary};

  @media (max-width: 1300px) {
    height: fit-content;
  }

  @media (max-width: 767px) {
    height: fit-content;
  }
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

      .inputHolderOutside {
        clip-path: polygon(88% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
        background-color: ${colors.white};
        width: 234px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: clip-path 0.5s ease;

        &:focus input {
          clip-path: polygon(88% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
          transition: clip-path 0.5s ease;
        }

        .inputHolderInside {
          clip-path: polygon(88% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
          transition: clip-path 0.5s ease;
          background-color: ${colors.secondary};
          width: 232px;
          height: 40px;
        }

        .inputHolderInside:focus-within {
          clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
        }
      }

    .inputHolderOutside:focus-within {
        clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
      }


      input {
        width: 204px;
        height: 42px;
        background-color: transparent;
        outline: none;
        color: ${colors.white};
        font-family: ${fonts.montserrat};
        font-size: 18px;
        padding: 10px 18px;
        border: none;


        &::placeholder {
          text-transform: uppercase;
        }
      }

      button {
        width: 234px;
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
        clip-path: polygon(88% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
        transition: clip-path 0.5s ease;

        &:hover {
          clip-path: polygon(100% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
        }
      }
    }
  }

  @media (max-width: 1300px) {

    .containerForm {
      margin-bottom: 30px;
      max-width: 350px;

      form {
        flex-direction: column;
      }
    }

    .bodyWomanImage {
      width: 350px;
    }
  }

  @media (max-width: 767px) {
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .containerForm {
      margin-bottom: 30px;
      max-width: 350px;

      form {
        flex-direction: column;
      }
    }

    .bodyWomanImage {
      width: 250px;
    }
  }
`

export const LoadingContainer = styled.div`
  margin: 100px auto;

  img {
    width: 300px;
    height: 300px;
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
