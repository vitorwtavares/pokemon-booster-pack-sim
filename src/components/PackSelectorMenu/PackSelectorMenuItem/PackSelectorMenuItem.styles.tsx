import { Flex, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const LogoContainer = styled(Flex, {
  shouldForwardProp: prop => prop !== 'isSelectedPack'
})`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  transition: all 0.2s ease;
  background-color: ${({ isSelectedPack }) =>
    isSelectedPack && 'rgba(51, 51, 51, 0.3)'};

  > img {
    transform: ${({ isSelectedPack }) => isSelectedPack && 'scale(1.25);'};
  }

  :hover {
    cursor: pointer;

    > img {
      transform: ${({ isSelectedPack }) => !isSelectedPack && 'scale(1.25)'};
    }
  }
`

export const PackLogo = styled(Image)`
  height: 100%;
  max-width: 110px;
  object-fit: contain;
`
