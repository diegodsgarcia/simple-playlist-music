import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

export default Global
