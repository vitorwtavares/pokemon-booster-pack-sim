import { useQuery } from '@tanstack/react-query'

import { fetchPackCards } from '@/services/requests'

export const usePackCardsQuery = (setId: string) =>
  useQuery({
    queryKey: ['packCards', setId],
    queryFn: () => fetchPackCards(setId),
    enabled: false,
    staleTime: 0,
    gcTime: 0
  })
