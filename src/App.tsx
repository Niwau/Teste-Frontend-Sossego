import { useContext } from "react"
import { UserForm } from "./components/Forms/UserForm/UserForm"
import { FormContext } from "./contexts/FormContext"
import { Button, Center, Divider, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { AdressForm } from "./components/Forms/AdressForm/AdressForm"
import { AboutForm } from "./components/Forms/AboutForm/AboutForm"
import { Informartion } from "./components/Information/Informartion"

function App() {

  const { state } = useContext(FormContext)

  switch (state.steps) {
    case 0:
      return (
        <Center mt='50px' mx='20px'>
          <UserForm/>
        </Center>
      )
    case 1: 
      return (
        <Center mt='50px' mx='20px'>
          <AdressForm/>
        </Center>
      )
    case 2: 
      return (
        <Center mt='50px' mx='20px'>
          <AboutForm/>
        </Center>
      )
    case 3: 
      return (
        <Center mt='100px' mx='20px'>
         <Informartion/>
        </Center>
      )
    default: 
      return (
        <UserForm/>
      )
  }

}

export default App
