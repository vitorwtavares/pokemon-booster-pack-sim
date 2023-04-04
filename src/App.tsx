import { useState } from 'react'

import { CardPack } from '~/components'

import { getCardsByPackId } from '~/services/requests'

import { CARDS_PER_PACK, BOOSTER_PACK_SELECTED } from '~/utils/constants'
import { getMultipleRandom } from '~/utils/getMultipleRandom'

import * as S from '~/App.styles'

const App = () => {
  const [cards, setCards] = useState(Array(CARDS_PER_PACK).fill(undefined))
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (isCardFlipped) setIsCardFlipped(false)

    setIsLoading(true)

    const { data } = await getCardsByPackId(BOOSTER_PACK_SELECTED)
    const randomCards = getMultipleRandom(data, 3)

    setCards(randomCards)

    setTimeout(() => {
      setIsLoading(false)
      setIsCardFlipped(true)
    }, 2000)
  }

  return (
    <S.PageWrapper>
      <S.GetCardsButton onClick={handleClick} isLoading={isLoading}>
        {isCardFlipped ? 'Open another pack' : 'Open pack'}
      </S.GetCardsButton>
      <CardPack cards={cards} isCardFlipped={isCardFlipped} />
    </S.PageWrapper>
  )
}

export default App
