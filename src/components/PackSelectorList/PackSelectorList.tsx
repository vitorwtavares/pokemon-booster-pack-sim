import { FC, useEffect, useMemo, useState } from 'react'
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
}

const PackSelectorList: FC<PackSelectorListProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [packs, setPacks] = useState<Pack[]>([])
  const [page, setPage] = useState(1)

  const shouldFetchMore = useMemo(() => page < DEFAULT_PACKS_LAST_PAGE, [page])

  const fetchInitialBoosterPacks = async () => {
    try {
      setIsLoading(true)
      const { data } = await getBoosterPacks({
        page,
        pageSize: DEFAULT_PACKS_PAGE_SIZE,
        select: 'id,images,name,total'
      })
      setPacks(data)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => setIsLoading(false), 100)
    }
  }

  const fetchMore = async () => {
    try {
      setIsLoading(true)
      const { data } = await getBoosterPacks({
        page,
        pageSize: DEFAULT_PACKS_PAGE_SIZE,
        select: 'id,images,name,total'
      })
      setPacks([...packs, ...data])
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEnterWaypoint = () => {
    console.log('entered')
    setPage(page + 1)
  }

  useEffect(() => {
    if (packs.length === 0) fetchInitialBoosterPacks()
  }, [])

  useEffect(() => {
    if (page > 1) fetchMore()
  }, [page])

  if (isLoading && packs.length === 0) {
    return (
      <S.SpinnerContainer>
        <S.CustomSpinner />
      </S.SpinnerContainer>
    )
  }

  if (packs.length > 1) {
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
