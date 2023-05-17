import { Box, Button, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { DESKTOP_HEADER_HEIGHT } from '~/utils/constants'

export const HeaderContainer = styled(Box)`
  width: 100%;
  height: ${DESKTOP_HEADER_HEIGHT};
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'button logo .';
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'logo' 'button';
    align-items: stretch;
    gap: 12px;
  }
`

export const HeaderImage = styled(Image)`
  height: 60px;
  grid-area: logo;
  margin: 0 auto;
`

export const SelectBoosterPackButton = styled(Button)`
  background-color: white;
  width: 100%;
  grid-area: button;
  width: 180px;
  color: #222;

  @media only screen and (max-width: 768px) {
    margin: auto;
    width: 300px;
  }
`
