import { Flex } from '@chakra-ui/react'
import { CARDS_PER_PACK } from '../utils/constants'
import Card from './Card'

const CardPack = () => {
  return (
    <Flex w="100%" justify="space-between" wrap="wrap">
      {['0', '1', '2'].map(card => (
        <Card card={card} />
      ))}
    </Flex>
  )
}

export default CardPack
