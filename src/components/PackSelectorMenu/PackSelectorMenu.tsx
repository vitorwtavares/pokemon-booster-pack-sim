import { useEffect, useState, useCallback } from 'react'

import * as S from './PackSelectorMenu.styles'
import { getBoosterPacks } from '~/services/requests'
import { Pack } from '~/types/api'
import { DEFAULT_PACKS_PAGE_SIZE } from '~/utils/constants'

import { PackSelectorMenuItem } from './PackSelectorMenuItem'

const PackSelectorMenu = () => {
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

  if (isLoading) {
    return (
      <S.OuterContainer>
        <S.CustomSpinner />
      </S.OuterContainer>
    )
  }

  if (packs) {
    return (
      <S.OuterContainer>
        <S.InnerContainer>
          {packs?.map((pack: Pack) => (
            <PackSelectorMenuItem pack={pack} />
          ))}
        </S.InnerContainer>
      </S.OuterContainer>
    )
  }
}

export default PackSelectorMenu
