import { ThemeProvider } from 'styled-components'
import { ButtonTheme } from './components/ButtonTheme'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './components/global'
import { ButtonProps } from './components/ButtonProps'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonTheme />
      <ButtonTheme />
      <ButtonTheme />
      <ButtonTheme />
      <ButtonTheme />
      <br/>
      <ButtonProps variant="primary" />
      <ButtonProps variant="secondary" />
      <ButtonProps variant="success" />
      <ButtonProps variant="danger" />
      <ButtonProps />
      <GlobalStyle />
    </ThemeProvider>
  )
}
