import { Card } from '~/components'

import * as S from './CardPack.styles'

interface CardPackProps {
  cards?: Array<any>
  isCardFlipped: boolean
}

const CardPack = ({ cards, isCardFlipped }: CardPackProps) => {
  return (
    <S.CardPackContainer flexDirection={{ base: 'column', lg: 'row' }}>
      {cards?.map((card, index) => (
        <Card
          card={card}
          key={card?.id || index}
          isCardFlipped={isCardFlipped}
        />
      ))}
    </S.CardPackContainer>
  )
}

export default CardPack
