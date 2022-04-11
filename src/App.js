import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/GlobalStyle'
import theme from './theme/theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Weather App</h1>
    </ThemeProvider>
  )
}

export default App
