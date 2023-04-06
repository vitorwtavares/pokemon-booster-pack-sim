import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { HEADER_HEIGHT } from '~/utils/constants'

export const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  padding-top: 30px;
`

export const HeaderImage = styled(Image)`
  height: 60px;
`
