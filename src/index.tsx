import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './global-style/global.style'
import IsMenuOpenProvider from './context/menu.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <IsMenuOpenProvider>
      <App />
    </IsMenuOpenProvider>
  </React.StrictMode>
)
