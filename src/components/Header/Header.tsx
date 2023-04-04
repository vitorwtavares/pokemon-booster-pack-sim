import { useEffect, useState } from 'react'

import { getBoosterPackById } from '~/services/requests'
import { BOOSTER_PACK_SELECTED } from '~/utils/constants'
import fallbackLogo from '~/assets/fallback-logo.png'

import * as S from './Header.styles'
import { getCachedPackLogos, setCachedPackLogos } from '~/utils/cachePackLogos'

const Header = () => {
  const [logo, setLogo] = useState<string | undefined>()

  const getLogo = async () => {
    const hasCachedLogo = getCachedPackLogos(BOOSTER_PACK_SELECTED, setLogo)
    if (hasCachedLogo) return

    const { data } = await getBoosterPackById(BOOSTER_PACK_SELECTED)
    setLogo(data.images.logo)

    setCachedPackLogos(data)
  }

  useEffect(() => {
    getLogo()
  }, [BOOSTER_PACK_SELECTED])

  return (
    <S.HeaderContainer>
      <S.HeaderImage src={logo || fallbackLogo} />
    </S.HeaderContainer>
  )
}

export default Header
