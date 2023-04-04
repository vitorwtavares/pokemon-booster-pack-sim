import { Flex, Image } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const cardSideStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

export const CardContainer = styled(Flex, {
  shouldForwardProp: prop => prop !== 'shouldCardBeFlipped'
})`
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 288px;
  height: 400px;
  transform: ${({ shouldCardBeFlipped }) =>
    shouldCardBeFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

export const CardBack = styled(Flex)`
  ${cardSideStyles}
`

export const CardFront = styled(Flex)`
  ${cardSideStyles}
  transform: rotateY(180deg);
`

export const CardImage = styled(Image)`
  max-height: 400px;
  border-radius: 15px;
`
