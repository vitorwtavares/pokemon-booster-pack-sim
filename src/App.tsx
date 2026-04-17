import { useContext, useState } from 'react'

import { CardPack, Header, Credits } from '@/components'

import { SelectedPackContext } from '@/context/SelectedPack'
import { usePackCardsQuery } from '@/hooks/usePackCardsQuery'

import { CARDS_PER_PACK } from '@/utils/constants'

import * as S from '@/App.styles'

const EMPTY_CARDS = Array(CARDS_PER_PACK).fill(undefined)

const App = () => {
  const { selectedPack } = useContext(SelectedPackContext)
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const { data: cards, refetch, isFetching } = usePackCardsQuery(selectedPack.id)

  const showFlipped = isCardFlipped && !!cards

  const handleClick = async () => {
    if (showFlipped) setIsCardFlipped(false)

    const result = await refetch()

    if (result.data) {
      setTimeout(() => setIsCardFlipped(true), 500)
    }
  }

  return (
    <S.HeaderAndContentContainer>
      <Header />
      <S.ContentWrapper>
        <S.OpenPackButton onClick={handleClick} loading={isFetching}>
          {showFlipped ? 'Open another pack' : 'Open pack'}
        </S.OpenPackButton>
        <CardPack cards={cards ?? EMPTY_CARDS} isCardFlipped={showFlipped} />
        <Credits />
      </S.ContentWrapper>
    </S.HeaderAndContentContainer>
  )
}

export default App
