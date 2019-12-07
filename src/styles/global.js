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

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    --playerHeight: 90px;
  }


  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100% - var(--playerHeight));
    background-color: #f5f5f5;
  }
`

export default Global
