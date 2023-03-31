import { Image } from '@chakra-ui/react'

import cardBack from '../assets/card-back.png'

interface CardProps {
  card: string
}

const Card = ({ card }: CardProps) => {
  return <Image src={cardBack} mb="48px" height="400px" />
}

export default Card
