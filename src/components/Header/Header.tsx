import pokeball from '~/assets/pokeball.png'

import * as S from './Header.styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderImage src={pokeball} />
    </S.HeaderContainer>
  )
}

export default Header
