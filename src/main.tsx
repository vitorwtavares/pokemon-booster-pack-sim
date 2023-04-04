import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Header } from '~/components'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#222'
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
