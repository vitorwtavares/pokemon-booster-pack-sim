import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { SelectedPackProvider } from '~/context/SelectedPack'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#222',
        overflowY: 'hidden'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <SelectedPackProvider>
      <App />
    </SelectedPackProvider>
  </ChakraProvider>
)
