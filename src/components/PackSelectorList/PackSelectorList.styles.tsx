import { Box, Flex, Spinner } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const scrollbarStyles = css`
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const SpinnerContainer = styled(Flex)`
  height: 100%;
  align-items: center;
`

export const CustomSpinner = styled(Spinner)`
  margin: 0 auto;
`

export const InnerContainer = styled(Flex)`
  color: white;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;

  ${scrollbarStyles}
`

export const WaypointContainer = styled(Box)`
  margin-top: 50px;
`
