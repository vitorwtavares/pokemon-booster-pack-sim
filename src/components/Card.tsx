import { Image } from '@chakra-ui/react'

import cardBack from '../assets/card-back.png'

interface CardProps {
  card: string
}

const Card = ({ card }: CardProps) => {
  return <Image src={card ? card : cardBack} mx="auto" maxHeight="400px" />
}

export default Card
