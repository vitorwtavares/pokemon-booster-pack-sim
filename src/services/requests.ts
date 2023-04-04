import client from '~/providers/fetchClient'

export const getBoosterPackById = (id: string) => client.get(`sets/${id}`)

export const getCardsByPackId = (setId: string) =>
  client.get(`cards?q=set.id:${setId}`)
