import { useContext } from "react"
import { UserForm } from "./components/Forms/UserForm/UserForm"
import { FormContext } from "./contexts/FormContext"
import { Timeline } from "./components/Forms/Timeline/Timeline"
import { Box } from "@chakra-ui/react"

function App() {

  const { state } = useContext(FormContext)

  switch (state.steps) {
    case 0:
      return (
        <Box mt='50px' display='grid' placeItems='center'>
          <UserForm/>
        </Box>
      )
    case 1: 
      return <Timeline steps={state.steps}/>
  }

}

export default App
