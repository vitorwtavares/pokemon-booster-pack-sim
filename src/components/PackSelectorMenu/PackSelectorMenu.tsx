import { useEffect, useState, useContext, useCallback } from 'react'

import * as S from './PackSelectorMenu.styles'
import { getBoosterPacks } from '~/services/requests'
import { Pack } from '~/types/api'
import { SelectedPackContext } from '~/context/SelectedPack'
import { DEFAULT_PACKS_PAGE_SIZE } from '~/utils/constants'
import { Tooltip } from '@chakra-ui/react'

const PackSelectorMenu = () => {
  const { selectedPack, setSelectedPack } = useContext(SelectedPackContext)

  const [isLoading, setIsLoading] = useState(false)
  const [packs, setPacks] = useState<Pack[]>([])
  const [page, setPage] = useState(1) // TODO infinite scroll

  const fetchBoosterPacks = useCallback(async () => {
    try {
      setIsLoading(true)

      const { data } = await getBoosterPacks({
        page,
        pageSize: DEFAULT_PACKS_PAGE_SIZE,
        select: 'id,images,name,total'
      })
      if (
        packs.length > 1 &&
        data.filter((pack: Pack) => packs.map(p => p.id).includes(pack.id))
      ) {
        throw new Error('Duplicate values found.')
      } else {
        setPacks(prevState => [...prevState, ...data])
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [DEFAULT_PACKS_PAGE_SIZE])

  useEffect(() => {
    fetchBoosterPacks()
  }, [])

  return (
    <S.OuterContainer>
      {isLoading ? (
        <S.CustomSpinner />
      ) : (
        packs && (
          <S.InnerContainer>
            {packs?.map((pack: Pack) => (
              <Tooltip label={pack.name} placement="right">
                <S.LogoContainer
                  key={pack.id}
                  isSelectedPack={pack.id === selectedPack.id}
                  onClick={() =>
                    setSelectedPack({ id: pack.id, total: pack.total })
                  }
                >
                  <S.PackLogo src={pack.images.logo} />
                </S.LogoContainer>
              </Tooltip>
            ))}
          </S.InnerContainer>
        )
      )}
    </S.OuterContainer>
  )
}

export default PackSelectorMenu
