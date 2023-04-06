import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'

import * as S from './PackSelectorMenu.styles'
import { getBoosterPacks } from '~/services/requests'

const PackSelectorMenu = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [packs, setPacks] = useState<any[]>([])

  const handleClick = async () => {
    try {
      setIsLoading(true)

      const { data } = await getBoosterPacks()
      console.log('data', data)
      setPacks(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    //TODO get all sets and assign them to the state in order to use the images for menu
    //sets will need to be sent to global context in order for us to use their length and id
    //it's possible to use the select query here to get only: id, images, name and total
    //
    // fetchBoosterPacks()
  }, [])

  return (
    <S.Container>
      {isLoading ? (
        <S.CustomSpinner />
      ) : (
        <>
          {/* TODO pack images will be here, this button will be removed*/}
          <Button colorScheme="cyan" onClick={handleClick}>
            get sets
          </Button>
        </>
      )}
    </S.Container>
  )
}

export default PackSelectorMenu
