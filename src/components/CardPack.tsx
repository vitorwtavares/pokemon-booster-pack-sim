import { Flex } from '@chakra-ui/react'
import Card from './Card'

interface CardPackProps {
  cards?: string[]
}

const CardPack = ({ cards }: CardPackProps) => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      flexDirection={{ base: 'column', lg: 'row' }}
      gap="20px"
    >
      {cards?.map(card => (
        <Card card={card} key={card} />
      ))}
    </Flex>
  )
}

export default CardPack
