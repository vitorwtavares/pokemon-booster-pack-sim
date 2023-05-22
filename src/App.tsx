import { useState, useContext } from 'react'

import { CardPack, Header } from '~/components'

import { getCards } from '~/services/requests'
import { SelectedPackContext } from '~/context/SelectedPack'

import { CARDS_PER_PACK } from '~/utils/constants'
import { getRandomCardIds } from '~/utils/getRandomCardIds'

import * as S from '~/App.styles'
import { Flex } from '@chakra-ui/react'

const App = () => {
  const { selectedPack } = useContext(SelectedPackContext)

  const [cards, setCards] = useState(Array(CARDS_PER_PACK).fill(undefined))
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (isCardFlipped) setIsCardFlipped(false)

    try {
      setIsLoading(true)

      const randomIds = getRandomCardIds(selectedPack.total, CARDS_PER_PACK)

      const { data } = await getCards({
        q: `set.id:${selectedPack.id} ${randomIds}`
      })

      setCards(data)
      setTimeout(() => {
        setIsCardFlipped(true)
        setIsLoading(false)
      }, 500)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <S.HeaderAndContentContainer>
      <Header />
      <S.ContentWrapper>
        <S.OpenPackButton onClick={handleClick} isLoading={isLoading}>
          {isCardFlipped ? 'Open another pack' : 'Open pack'}
        </S.OpenPackButton>
        <CardPack cards={cards} isCardFlipped={isCardFlipped} />
      </S.ContentWrapper>
    </S.HeaderAndContentContainer>
  )
}

export default App
