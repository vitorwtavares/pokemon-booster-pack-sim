import { Button, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from './utils/constants'

export const PageWrapper = styled(Flex)`
  width: 100%;
  gap: 50px;
  max-width: 1024px;
  height: calc(100vh - ${HEADER_HEIGHT});
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media only screen and (max-width: 991px) {
    height: 100%;
  }
`

export const GetCardsButton = styled(Button)`
  width: 300px;
  color: white;
  transition: 0.6s;
  background-color: #e01c2f;

  :hover {
    background-color: #fbc32c;
  }
`
