import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider  } from '@chakra-ui/react'
import { FormProvider } from './contexts/FormContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
