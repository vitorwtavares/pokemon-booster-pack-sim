import { FC } from 'react'
import Tilt from 'react-parallax-tilt'

import cardBack from '~/assets/card-back.png'

import * as S from './Card.styles'

interface CardProps {
  card: any
  isCardFlipped: boolean
}

const Card: FC<CardProps> = ({ card, isCardFlipped }) => {
  const shouldCardBeFlipped = card?.images && isCardFlipped

  return (
    <S.CardContainer shouldCardBeFlipped={shouldCardBeFlipped}>
      <S.CardBack>
        <S.CardImage draggable={false} src={cardBack} />
      </S.CardBack>
      <S.CardFront>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.3}
          glareColor="white"
          glarePosition="all"
          glareBorderRadius="15px"
          scale={1.15}
        >
          <S.CardImage
            draggable={false}
            src={card?.images && card?.images?.large}
          />
        </Tilt>
      </S.CardFront>
    </S.CardContainer>
  )
}

export default Card
