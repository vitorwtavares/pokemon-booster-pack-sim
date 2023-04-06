import { useState } from 'react'

import { CardPack, Header, PackSelectorMenu } from '~/components'

import { getCards } from '~/services/requests'

import {
  CARDS_PER_PACK,
  SELECTED_BOOSTER_PACK,
  SELECTED_BOOSTER_PACK_CARDS_AMOUNT
} from '~/utils/constants'
import { getRandomCardIds } from '~/utils/getRandomCardIds'

import * as S from '~/App.styles'
import { Flex } from '@chakra-ui/react'

const App = () => {
  const [cards, setCards] = useState(Array(CARDS_PER_PACK).fill(undefined))
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (isCardFlipped) setIsCardFlipped(false)

    try {
      setIsLoading(true)
      // TODO params for this will come from store based on selected pack
      const randomIds = getRandomCardIds(
        SELECTED_BOOSTER_PACK_CARDS_AMOUNT,
        CARDS_PER_PACK
      )

      const { data } = await getCards({
        q: `set.id:${SELECTED_BOOSTER_PACK}  ${randomIds}`
      })

      setCards(data)
      setTimeout(() => setIsCardFlipped(true), 500)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Flex>
      <PackSelectorMenu />
      <S.HeaderAndContentContainer>
        <Header />
        <S.ContentWrapper>
          <S.OpenPackButton onClick={handleClick} isLoading={isLoading}>
            {isCardFlipped ? 'Open another pack' : 'Open pack'}
          </S.OpenPackButton>
          <CardPack cards={cards} isCardFlipped={isCardFlipped} />
        </S.ContentWrapper>
      </S.HeaderAndContentContainer>
    </Flex>
  )
}

export default App
