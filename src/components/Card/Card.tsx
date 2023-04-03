import { Image } from '@chakra-ui/react'
import { useState } from 'react'

import cardBack from '~/assets/card-back.png'

import * as S from './Card.styles'

interface CardProps {
  card: any
  isCardFlipped: boolean
}

const Card = ({ card, isCardFlipped }: CardProps) => {
  return (
    <S.CardContainer
      transform={
        card?.images && isCardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }
    >
      {card?.rarity?.toLowerCase()?.includes('holo') && <p>holo</p>}
      <S.CardBack>
        <Image draggable={false} src={cardBack} maxH="400px" />
      </S.CardBack>
      <S.CardFront>
        <Image
          draggable={false}
          src={card?.images && card?.images?.large}
          maxH="400px"
        />
      </S.CardFront>
    </S.CardContainer>
  )
}

export default Card
