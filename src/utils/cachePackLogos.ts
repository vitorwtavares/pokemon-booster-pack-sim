import { Dispatch, SetStateAction } from 'react'
import { Pack } from '@/types/api'

export const getCachedPackLogos = (
  boosterPackSelected: string,
  setLogoFunction: Dispatch<SetStateAction<string | undefined>>
) => {
  const selectedPack = localStorage.getItem('selected-pack')

  if (selectedPack) {
    const { packId, packLogo } = JSON.parse(selectedPack)

    if (packId === boosterPackSelected) {
      setLogoFunction(packLogo)
      return true
    }
  }
  return false
}

export const setCachedPackLogos = (data: Pack) => {
  localStorage.setItem(
    'selected-pack',
    JSON.stringify({ packId: data.id, packLogo: data.images.logo })
  )
}
