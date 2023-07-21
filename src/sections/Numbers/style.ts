import { styled } from 'styled-components'
import { Container, colors, fonts } from '../../global-style/global.style'

export const NumberSection = styled.section`
  height: 658px;
  background-color: ${colors.main};
`

export const NumberContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  color: ${colors.white};

  .infos {
    margin-top: 174px;
    max-width: 814px;

    p {
      font-family: ${fonts.montserrat};
      font-size: 18px;
    }

    .cardContainerInfo {
      width: 100%;
      display: flex;
      gap: 50px;
      margin-top: 70px;
    }

    .card {
      display: flex;
      flex-direction: column;
      width: 218px;
      span:first-child {
        font-size: 62px;
        font-family: ${fonts.bebas};
        margin-left: 25px;
      }

      span:nth-child(2) {
        font-size: 18px;
        font-family: ${fonts.montserrat};
      }
    }
  }

  .imagesRec1 {
    position: absolute;
    top: 0;
    left: -80px;
  }

  .imagesRec2 {
    position: absolute;
    top: 0;
    left: -60px;
  }

  .imagesRec3 {
    position: absolute;
    top: 0;
    left: -25px;
  }

  .bodyImg {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`
