import { Image } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'

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
      <S.CardBack>
        <Image draggable={false} src={cardBack} maxH="400px" />
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
          <Image
            draggable={false}
            src={card?.images && card?.images?.large}
            maxH="400px"
          />
        </Tilt>
      </S.CardFront>
    </S.CardContainer>
  )
}

export default Card
