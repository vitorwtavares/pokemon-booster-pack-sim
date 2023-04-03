import { Flex } from '@chakra-ui/react'

import { Card } from '~/components'

interface CardPackProps {
  cards?: Array<any>
  isCardFlipped: boolean
}

const CardPack = ({ cards, isCardFlipped }: CardPackProps) => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      flexDirection={{ base: 'column', lg: 'row' }}
      gap="20px"
    >
      {cards?.map((card, index) => (
        <Card
          card={card}
          key={card?.id || index}
          isCardFlipped={isCardFlipped}
        />
      ))}
    </Flex>
  )
}

export default CardPack
