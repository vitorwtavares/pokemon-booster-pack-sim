import './global.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

import { SelectedPackProvider } from '~/context/SelectedPack'
import AppToaster from '~/components/AppToaster'

const system = createSystem(defaultConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider value={system}>
    <SelectedPackProvider>
      <App />
      <AppToaster />
    </SelectedPackProvider>
  </ChakraProvider>
)
