import { Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const cardSideStyles = css`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`

export const CardContainer = styled(Flex)`
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 100%;
  height: 400px;
`

export const CardBack = styled(Flex)`
  ${cardSideStyles}
`

export const CardFront = styled(Flex)`
  ${cardSideStyles}
  transform: rotateY(180deg);
`
