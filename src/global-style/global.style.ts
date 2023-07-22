import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  main: '#A03333',
  secondary: '#222222',
  white: '#FFFFFF',
  red: '#FF0202',
  black: '#000000',
  grey: '#B4B4B4',
  greyLetters: '#787878',
  contactButtonColor: '#FF3939'
}

export const fonts = {
  bungee: '"Bungee Outline", cursive',
  bebas: '"Bebas Neue", sans-serif',
  montserrat: '"Montserrat", sans-serif'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    max-width: 80%;
  }
`
