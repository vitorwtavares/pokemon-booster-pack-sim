import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CardPackContainer = styled(Flex)`
  width: 100%;
  gap: 50px 10px;
  flex-wrap: wrap;
  margin: 0 30px 60px;

  @media only screen and (max-width: 768px) {
    flex-wrap: no-wrap;
    flex-direction: column;
  }
`
