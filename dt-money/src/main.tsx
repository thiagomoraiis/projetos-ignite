import React from 'react'
import { App } from './App.tsx'
import ReactDOM from 'react-dom/client'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>,
)
