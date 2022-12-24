import { Heading, Flex, FormControl, FormLabel, Input, Button, SimpleGrid, FormErrorMessage, Box } from '@chakra-ui/react'
import { Timeline } from '../Timeline/Timeline'
import { useUserForm } from './useUserForm'
import { FormContext } from '../../../contexts/FormContext';
import { useContext } from 'react';

export const UserForm = () => {

  const { register, onSubmit, errors } = useUserForm();
  const { state } = useContext(FormContext)

  return (
    <Box maxW='1440px' boxShadow='0px 4px 31px 0px rgba(238, 241, 245, 1)' p='60px' pos='relative'>
      <Flex direction='column' gap='47px'>
        <Heading fontSize={36} fontWeight={500}>Criação de usuário</Heading>
        <Timeline steps={state.steps}/>
        <form onSubmit={onSubmit}>
          <SimpleGrid columns={[1,2]} columnGap={'60px'} rowGap={'26px'}>
            <FormControl isInvalid={ errors.name && true } gridColumnStart={1} gridColumnEnd={[2,3]}>
              <FormLabel htmlFor='name'>Nome</FormLabel>
              <Input bg='#F0F2F6' id='name' {...register('name')}/>
              <FormErrorMessage>{ errors.name?.message }</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={ errors.password && true } >
              <FormLabel htmlFor='password'>Senha</FormLabel>
              <Input bg='#F0F2F6' id='password' {...register('password')} type='password'/>
              <FormErrorMessage>{ errors.password?.message }</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={ errors.passwordConfirm && true } >
              <FormLabel htmlFor='passwordConfirm'>Confirmar Senha</FormLabel>
              <Input bg='#F0F2F6' id='passwordConfirm' {...register('passwordConfirm')} type='password'/>
              <FormErrorMessage>{ errors.passwordConfirm?.message }</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={ errors.email && true }>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input bg='#F0F2F6' id='email' {...register('email')}/>
              <FormErrorMessage>{ errors.email?.message }</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={ errors.birth && true }>
              <FormLabel htmlFor='birth'>Data de nascimento</FormLabel>
              <Input bg='#F0F2F6' id='birth' type='date' {...register('birth')}/>
              <FormErrorMessage>{ errors.birth?.message }</FormErrorMessage>
            </FormControl>
            <Button type='submit' gridColumnStart={[1,2]} mt='100px' colorScheme='purple'>Próximo passo</Button>
          </SimpleGrid>
        </form>
      </Flex>
    </Box>
  )
}