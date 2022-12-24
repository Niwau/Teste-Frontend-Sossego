import { Circle, Text, Stack, HStack } from '@chakra-ui/react'
import { Document, House, Person } from '../../Icons/Icons'
import { getStepColor } from './Timeline.helpers'

interface ITimeline {
  steps: number
}

export const Timeline  = ({ steps }: ITimeline) => {
  return (
    <Stack spacing='33px' direction={['column', 'row']}>
      <HStack wrap='wrap' gap={'8px'}>
        <Circle bg='#F0F2F6' size='50px'>
          <Person boxSize='24px' color={ getStepColor(steps, 0) }/>
        </Circle>
        <Text fontWeight={500} fontSize={16}>
          Identificação do usuário
        </Text>
      </HStack>
      <HStack wrap='wrap' gap={'8px'}>
        <Circle bg='#F0F2F6' size='50px' color={ getStepColor(steps, 1) }>
          <House boxSize='24px'/>
        </Circle>
        <Text fontWeight={500} fontSize={16}>
          Endereço do usuário
        </Text>
      </HStack>
      <HStack wrap='wrap' gap={'8px'}>
        <Circle bg='#F0F2F6' size='50px' color={ getStepColor(steps, 2) }>
          <Document boxSize='24px'/>
        </Circle>
        <Text fontWeight={500} fontSize={16}>
          Sobre você
        </Text>
      </HStack>
    </Stack>
  )
}