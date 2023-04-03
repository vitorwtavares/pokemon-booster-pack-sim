import client from '~/providers/fetchClient'

export const getBoosterSetById = (id: string) => client.get(`sets/${id}`)

export const getCardsBySetId = (setId: string) =>
  client.get(`cards?q=set.id:${setId}`)
