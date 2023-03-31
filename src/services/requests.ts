import client from '../providers/fetchClient'

export const getBoosterSetById = (id: string) => client.get(`sets/${id}`)
