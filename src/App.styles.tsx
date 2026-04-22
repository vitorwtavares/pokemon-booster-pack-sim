import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { DESKTOP_HEADER_HEIGHT } from './utils/constants'

export const HeaderAndContentContainer = styled(Flex)`
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`

export const ContentWrapper = styled(Flex)`
  width: 100%;
  height: calc(100vh - ${DESKTOP_HEADER_HEIGHT});
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`
