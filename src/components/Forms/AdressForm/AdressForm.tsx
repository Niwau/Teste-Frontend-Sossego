import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, SimpleGrid } from "@chakra-ui/react"
import { Timeline } from "../Timeline/Timeline"
import { FormContext } from "../../../contexts/FormContext"
import { useContext } from "react"
import { useAdressForm } from "./useAdressForm"

export const AdressForm = () => {

  const { state, dispatch } = useContext(FormContext);
  const { register, errors, onSubmit } = useAdressForm()

  return (
    <Box maxW='1440px' boxShadow='0px 4px 31px 0px rgba(238, 241, 245, 1)' p='60px' pos='relative'>
      <Flex direction='column' gap='47px'>
        <Heading fontSize={36} fontWeight={500}>Criação de usuário</Heading>
        <Timeline steps={state.steps}/>
        <form onSubmit={onSubmit}>
          <SimpleGrid columns={[1,2]} columnGap={'60px'} rowGap={'26px'}>
            <FormControl isInvalid={errors.cep && true}>
              <FormLabel htmlFor='cep'>CEP</FormLabel>
              <Input bg='#F0F2F6' id='cep' placeholder="xxxxx-xxx" {...register('cep')} />
              <FormErrorMessage>{errors.cep?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.street && true}>
              <FormLabel htmlFor='street'>Rua</FormLabel>
              <Input bg='#F0F2F6' id='street' {...register('street')} />
              <FormErrorMessage>{errors.street?.message}</FormErrorMessage>
            </FormControl>
            <Flex gap='9px'>
              <FormControl isInvalid={errors.number && true}>
                <FormLabel htmlFor='number'>Número</FormLabel>
                <Input bg='#F0F2F6' id='number' type='number' {...register('number')} />
                <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.district && true}>
                <FormLabel htmlFor='district'>Bairro</FormLabel>
                <Input bg='#F0F2F6' id='district' {...register('district')} />
                <FormErrorMessage>{errors.district?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl isInvalid={errors.city && true}> 
              <FormLabel htmlFor='city'>Cidade</FormLabel>
              <Input bg='#F0F2F6' id='city' {...register('city')} />
              <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
            </FormControl>
            <FormControl gridColumnStart={1} gridColumnEnd={3} isInvalid={errors.reference && true}>
              <FormLabel htmlFor='reference'>Ponto de referência</FormLabel>
              <Input bg='#F0F2F6' id='reference' {...register('reference')} />
              <FormErrorMessage>{errors.reference?.message}</FormErrorMessage>
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
