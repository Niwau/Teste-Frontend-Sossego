import { Box, Heading, Flex, FormControl, FormLabel, Input, Grid, Button, SimpleGrid } from '@chakra-ui/react'
import { Timeline } from '../Timeline/Timeline'

export const UserForm = () => {
  return (
    <Box maxWidth='fit-content' boxShadow={'0px 4px 31px 0px rgba(238, 241, 245, 1)'} p={'60px'}>
      <Flex direction='column' gap='47px'>
        <Heading fontSize={36} fontWeight={500}>Criação de usuário</Heading>
        <Timeline steps={0}/>
        <form>
          <FormControl>
            <SimpleGrid columns={[1,2]} columnGap={'60px'} rowGap={'26px'}>
              <Box gridColumnStart={1} gridColumnEnd={[2,3]}>
                <FormLabel>Nome</FormLabel>
                <Input bg='#F0F2F6'/>
              </Box>
              <Box>
                <FormLabel>Senha</FormLabel>
                <Input bg='#F0F2F6'/>
              </Box>
              <Box>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input bg='#F0F2F6'/>
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input bg='#F0F2F6'/>
              </Box>
              <Box>
                <FormLabel>Data de nascimento</FormLabel>
                <Input bg='#F0F2F6'/>
              </Box>
              <Button gridColumnStart={[1,2]} mt='100px' colorScheme='purple'>Próximo passo</Button>
            </SimpleGrid>
          </FormControl>
        </form>
      </Flex>
    </Box>
  )
}