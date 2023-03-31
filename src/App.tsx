import { CardPack } from './components'

import * as S from './App.styles'

function App() {
  const handleClick = async () => {
    console.log('card')
  }

  return (
    <S.PageWrapper>
      <CardPack />
      <S.GetCardsButton onClick={handleClick}>Get new card</S.GetCardsButton>
    </S.PageWrapper>
  )
}

export default App
