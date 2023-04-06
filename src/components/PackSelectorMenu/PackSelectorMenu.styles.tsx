import { Flex, Spinner } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from '~/utils/constants'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 250px;
  color: white;
  height: 100vh;
  box-shadow: 1px 0px 10px #555;
  padding: ${HEADER_HEIGHT} 40px;
  gap: 50px;
  justify-content: center;
  align-items: center;
`

export const CustomSpinner = styled(Spinner)`
  margin: 0 auto;
`
