import { Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const cardSideStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

export const CardContainer = styled(Flex)`
  margin: 0 auto;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease;
  width: 288px;
  height: 400px;
`

export const CardBack = styled(Flex)`
  ${cardSideStyles}
`

export const CardFront = styled(Flex)`
  ${cardSideStyles}
  transform: rotateY(180deg);
`

export const HoloFilter = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 15px;
  background-image: linear-gradient(
    to right,
    rgb(194, 255, 182),
    rgb(255, 163, 182),
    rgb(221, 169, 255),
    rgb(162, 209, 255)
  );
  opacity: 0.7;
`
