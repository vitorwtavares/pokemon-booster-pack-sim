import { useState } from 'react'

import { CardPack } from './components'
import { CARDS_PER_PACK } from './utils/constants'

import * as S from './App.styles'

const App = () => {
  const [cards, setCards] = useState<string[]>(
    Array(CARDS_PER_PACK).fill(undefined)
  )
  const handleClick = async () => {
    console.log('click')
  }

  return (
    <S.PageWrapper>
      <S.GetCardsButton onClick={handleClick}>Open pack</S.GetCardsButton>
      <CardPack cards={cards} />
    </S.PageWrapper>
  )
}

export default App
