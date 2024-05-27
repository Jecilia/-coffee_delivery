import { ThemeProvider } from 'styled-components'
import { defaulttheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaulttheme}>
      <h1>ola</h1>
    </ThemeProvider>
  )
}
