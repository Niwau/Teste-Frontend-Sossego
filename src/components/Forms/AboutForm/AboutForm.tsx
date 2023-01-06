import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, SimpleGrid, Textarea } from "@chakra-ui/react"
import { Timeline } from "../Timeline/Timeline"
import { useContext } from "react"
import { FormContext } from "../../../contexts/FormContext"
import { useAboutForm } from "./useAboutForm"

export const AboutForm = () => {

  const { state, dispatch } = useContext(FormContext)

  const { errors, onSubmit, register } = useAboutForm()

  return (
    <Box maxW='1440px' boxShadow='0px 4px 31px 0px rgba(238, 241, 245, 1)' p='60px' pos='relative'>
    <Flex direction='column' gap='47px'>
      <Heading fontSize={36} fontWeight={500}>Criação de usuário</Heading>
      <Timeline steps={state.steps}/>
      <form onSubmit={onSubmit}>
        <SimpleGrid columns={[1,2]} gap={'100px'}>
          <FormControl isInvalid={errors.about && true } gridColumnStart={1} gridColumnEnd={3}>
            <FormLabel>Nos conte mais sobre você</FormLabel>
            <Textarea {...register('about')} p={4} rows={8} resize='none' bg='#F0F2F6'/>
            <FormErrorMessage>{errors.about?.message}</FormErrorMessage>
          </FormControl>
          <Flex gridColumnStart={2} wrap='wrap' gap='10px'>
            <Button paddingX={8} flexGrow={1} type='submit' colorScheme='gray' onClick={() => dispatch({ type: 'steps/decrement'})}>Anterior</Button>
            <Button flexGrow={1} type='submit' colorScheme='purple'>Próximo passo</Button>
          </Flex>
        </SimpleGrid>
      </form>
    </Flex>
  </Box>
  )
}
