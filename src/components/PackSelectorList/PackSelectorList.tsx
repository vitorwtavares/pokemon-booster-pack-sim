import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { AddIcon } from '@chakra-ui/icons'

import { getBoosterPacks } from '~/services/requests'
import { Pack } from '~/types/api'
import {
  DEFAULT_PACKS_PAGE_SIZE,
  DEFAULT_PACKS_LAST_PAGE
} from '~/utils/constants'
import { excludedPacksNamesList } from '~/utils/excludedPacksNamesList'

import { PackSelectorListItem } from './PackSelectorListItem'

import * as S from './PackSelectorList.styles'

interface PackSelectorListProps {
  onClose: () => void
  searchTerm: string | null
}

const PackSelectorList: FC<PackSelectorListProps> = ({
  onClose,
  searchTerm
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [packs, setPacks] = useState<Pack[]>([])
  const [page, setPage] = useState(1)

  const shouldFetchMore = useMemo(
    () =>
      page < DEFAULT_PACKS_LAST_PAGE && packs.length >= DEFAULT_PACKS_PAGE_SIZE,
    [page, packs.length]
  )

  const fetchBoosterPacks = useCallback(
    async (
      isInitial: boolean = false,
      hasSearchTermChanged: boolean = false
    ) => {
      try {
        setIsLoading(true)
        const { data } = await getBoosterPacks({
          page: hasSearchTermChanged ? 1 : page,
          pageSize: DEFAULT_PACKS_PAGE_SIZE,
          select: 'id,images,name,total',
          ...(searchTerm && { q: `name:${searchTerm}` })
        })

        isInitial ? setPacks(data) : setPacks([...packs, ...data])
      } catch (err) {
        console.log(err)
      } finally {
        setTimeout(() => setIsLoading(false), 100)
      }
    },
    [page, searchTerm]
  )

  const handleEnterWaypoint = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (packs.length === 0) fetchBoosterPacks(true)
  }, [])

  useEffect(() => {
    if (page > 1) fetchBoosterPacks()
  }, [page])

  useEffect(() => {
    if (searchTerm !== null) fetchBoosterPacks(true, true)
  }, [searchTerm])

  if (isLoading && packs.length === 0) {
    return (
      <S.SpinnerContainer>
        <S.CustomSpinner />
      </S.SpinnerContainer>
    )
  }

  if (packs.length >= 1) {
    return (
      <S.InnerContainer>
        {packs
          ?.filter(p => !excludedPacksNamesList.includes(p.name))
          ?.map((pack: Pack) => (
            <PackSelectorListItem pack={pack} key={pack.id} onClose={onClose} />
          ))}
        {!isLoading && shouldFetchMore && (
          <S.WaypointContainer>
            <Waypoint onEnter={handleEnterWaypoint}>
              {isLoading ? <S.CustomSpinner /> : <AddIcon />}
            </Waypoint>
          </S.WaypointContainer>
        )}
      </S.InnerContainer>
    )
  }

  return null
}

export default PackSelectorList
