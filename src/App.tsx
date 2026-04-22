import { Backdrop, Credits, Header, PackOpening } from '@/components'

import * as S from '@/App.styles'

const App = () => {
  return (
    <S.HeaderAndContentContainer>
      <Backdrop />
      <Header />
      <S.ContentWrapper>
        <PackOpening />
        <Credits />
      </S.ContentWrapper>
    </S.HeaderAndContentContainer>
  )
}

export default App
