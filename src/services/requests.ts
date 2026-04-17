import client from '@/providers/fetchClient'
import { Card } from '@/types/api'
import { BuildQueryParams, buildQueryParams } from '@/utils/buildQueryParams'
import {
  COMMONS_PER_PACK,
  RARES_PER_PACK,
  UNCOMMONS_PER_PACK
} from '@/utils/constants'

export const getBoosterPacks = (params?: BuildQueryParams) =>
  client.get(buildQueryParams('sets', params))

export const getCards = (params?: BuildQueryParams) =>
  client.get(buildQueryParams('cards', params))

const CARD_SELECT_FIELDS = 'id,images,rarity,supertype,subtypes'

const RARE_RARITY_QUERY =
  '(rarity:"Rare" OR rarity:"Rare Holo" OR rarity:"Rare Holo EX" OR rarity:"Rare Holo GX" OR rarity:"Rare Holo V" OR rarity:"Rare Holo VMAX" OR rarity:"Rare Holo VSTAR" OR rarity:"Rare Ultra" OR rarity:"Rare Secret" OR rarity:"Rare Rainbow" OR rarity:"Rare Shiny" OR rarity:"Hyper Rare" OR rarity:"Illustration Rare" OR rarity:"Special Illustration Rare" OR rarity:"Amazing Rare" OR rarity:"Radiant Rare" OR rarity:"Trainer Gallery Rare Holo")'

const pickRandom = <T>(arr: T[], n: number): T[] => {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, n)
}

export const fetchPackCards = async (setId: string): Promise<Card[]> => {
  const [commonsRes, uncommonsRes, raresRes] = await Promise.all([
    getCards({
      q: `set.id:${setId} rarity:Common`,
      pageSize: 40,
      select: CARD_SELECT_FIELDS
    }),
    getCards({
      q: `set.id:${setId} rarity:Uncommon`,
      pageSize: 25,
      select: CARD_SELECT_FIELDS
    }),
    getCards({
      q: `set.id:${setId} ${RARE_RARITY_QUERY}`,
      pageSize: 20,
      select: CARD_SELECT_FIELDS
    })
  ])

  const commons = pickRandom<Card>(commonsRes.data ?? [], COMMONS_PER_PACK)
  const uncommons = pickRandom<Card>(uncommonsRes.data ?? [], UNCOMMONS_PER_PACK)
  const rares = pickRandom<Card>(raresRes.data ?? [], RARES_PER_PACK)

  return [...commons, ...uncommons, ...rares]
}
