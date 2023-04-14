import { useEffect, useState } from 'react'
import { Waypoint } from 'react-waypoint'

import { getBoosterPacks } from '~/services/requests'
import { Pack } from '~/types/api'
import { DEFAULT_PACKS_PAGE_SIZE } from '~/utils/constants'

import { PackSelectorMenuItem } from './PackSelectorMenuItem'

import * as S from './PackSelectorMenu.styles'
import { AddIcon } from '@chakra-ui/icons'
import { excludedPacksNamesList } from '~/utils/excludedPacksNamesList'

const PackSelectorMenu = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [packs, setPacks] = useState<Pack[]>([])
  const [page, setPage] = useState(1)

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
      setIsLoading(false)
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
      <S.OuterContainer>
        <S.CustomSpinner />
      </S.OuterContainer>
    )
  }

  if (packs.length > 1) {
    return (
      <S.OuterContainer>
        <S.InnerContainer>
          {packs
            ?.filter(p => !excludedPacksNamesList.includes(p.name))
            ?.map((pack: Pack) => (
              <PackSelectorMenuItem pack={pack} key={pack.id} />
            ))}
          <S.WaypointContainer>
            <Waypoint onEnter={handleEnterWaypoint}>
              {isLoading ? <S.CustomSpinner /> : <AddIcon />}
            </Waypoint>
          </S.WaypointContainer>
        </S.InnerContainer>
      </S.OuterContainer>
    )
  }

  return null
}

export default PackSelectorMenu
