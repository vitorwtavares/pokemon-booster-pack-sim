import { FC } from 'react'
import { Plus } from 'lucide-react'
import { Waypoint } from 'react-waypoint'

import { useBoosterPacksQuery } from '@/hooks/useBoosterPacksQuery'
import { Pack } from '@/types/api'
import { excludedPacksNamesList } from '@/utils/excludedPacksNamesList'

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
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useBoosterPacksQuery(searchTerm)

  const packs = data?.pages.flat() ?? []

  if (isFetching && packs.length === 0) {
    return (
      <S.SpinnerContainer>
        <S.CustomSpinner />
      </S.SpinnerContainer>
    )
  }

  if (packs.length === 0) return null

  return (
    <S.InnerContainer>
      {packs
        .filter(p => !excludedPacksNamesList.includes(p.name))
        .map((pack: Pack) => (
          <PackSelectorListItem pack={pack} key={pack.id} onClose={onClose} />
        ))}
      {hasNextPage && !isFetchingNextPage && (
        <S.WaypointContainer>
          <Waypoint onEnter={() => fetchNextPage()}>
            <Plus size={16} />
          </Waypoint>
        </S.WaypointContainer>
      )}
      {isFetchingNextPage && (
        <S.WaypointContainer>
          <S.CustomSpinner />
        </S.WaypointContainer>
      )}
    </S.InnerContainer>
  )
}

export default PackSelectorList
