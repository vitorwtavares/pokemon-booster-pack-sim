import { Box, Image } from '@chakra-ui/react'
import { getBoosterSetById } from '../services/requests'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { BOOSTER_SET_SELECTED, HEADER_HEIGHT } from '../utils/constants'
import fallbackLogo from '../assets/fallback-logo.png'

export const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  padding: 12px 0;
`

const Header = () => {
  const [logo, setLogo] = useState<string | undefined>()

  const getLogo = async () => {
    const { data } = await getBoosterSetById(BOOSTER_SET_SELECTED)
    setLogo(data.images.logo)
  }

  useEffect(() => {
    // TODO: REMOVE COMMENT, COMMENTED TO AVOID REQUESTS
    // getLogo()
  }, [])

  return (
    <HeaderContainer>
      <Image src={logo || fallbackLogo} height="100%" />
    </HeaderContainer>
  )
}

export default Header
