import { useInfiniteQuery } from '@tanstack/react-query'

import { getBoosterPacks } from '@/services/requests'
import { Pack } from '@/types/api'
import {
  DEFAULT_PACKS_LAST_PAGE,
  DEFAULT_PACKS_PAGE_SIZE
} from '@/utils/constants'

export const useBoosterPacksQuery = (searchTerm: string | null) =>
  useInfiniteQuery({
    queryKey: ['boosterPacks', searchTerm],
    queryFn: async ({ pageParam }) => {
      const res = await getBoosterPacks({
        page: pageParam,
        pageSize: DEFAULT_PACKS_PAGE_SIZE,
        select: 'id,images,name,total',
        ...(searchTerm && { q: `name:${searchTerm}` })
      })
      return (res as unknown as { data: Pack[] }).data
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return nextPage <= DEFAULT_PACKS_LAST_PAGE ? nextPage : undefined
    }
  })
