import { Flex, Image, Spinner } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from '~/utils/constants'

const scrollbarStyles = css`
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const CustomSpinner = styled(Spinner)`
  margin: 0 auto;
`

export const OuterContainer = styled(Flex)`
  position: fixed;
  width: 200px;
  color: white;
  height: 100vh;
  padding: calc(${HEADER_HEIGHT} * 1.5) 10px;
  padding-left: 0;
  justify-content: center;
  align-items: center;
`
export const InnerContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;

  ${scrollbarStyles}
`
export const LogoContainer = styled(Flex, {
  shouldForwardProp: prop => prop !== 'isSelectedPack'
})`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
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
