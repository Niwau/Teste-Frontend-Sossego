import { Flex, Heading, Text, SimpleGrid, Divider, Button } from '@chakra-ui/react'
import { useCallback, useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'

export const Informartion = () => {

  const { state, dispatch } = useContext(FormContext)

  const reset = useCallback(() => {
    dispatch({ type: 'steps/reset'})
  }, [])

  return (
    <Flex gap='24px' direction='column' shadow='0px 4px 31px #EEF1F5' border='1px solid rgba(240, 242, 246, 1)' px='100px' py='50px'>
      <Heading textAlign='center' fontWeight='500'>Usuário criado!</Heading>
      <Flex direction='column'>
        <Text as='h1' fontWeight='400' color='#8C98A9'>Nome</Text>
        <Text as='h2' fontSize={20} fontWeight='600' color='black'>{state.name}</Text>
      </Flex>
      <Flex direction='column'>
        <Text as='h1' fontWeight='400' color='#8C98A9'>Email</Text>
        <Text as='h2' fontSize={20} fontWeight='600' color='black'>{state.email}</Text>
      </Flex>
      <Divider/>
      <SimpleGrid columns={[1,2]} gap='24px'>
        <Flex direction='column'>
          <Text as='h1' fontWeight='400' color='#8C98A9'>Rua</Text>
          <Text as='h2' fontSize={20} fontWeight='600' color='black'>{state.street}</Text>
        </Flex>
        <Flex direction='column'>
          <Text as='h1' fontWeight='400' color='#8C98A9'>Número</Text>
          <Text as='h2' fontSize={20} fontWeight='600' color='black'>{state.number}</Text>
        </Flex>
        <Flex direction='column'>
          <Text as='h1' fontWeight='400' color='#8C98A9'>CEP</Text>
          <Text as='h2' fontSize={20} fontWeight='600' color='black'>{state.cep}</Text>
        </Flex>
        <Button gridColumnStart={1} gridColumnEnd={3} colorScheme='purple' onClick={reset}>Novo usuário</Button>
      </SimpleGrid>
  </Flex>
  )
}
