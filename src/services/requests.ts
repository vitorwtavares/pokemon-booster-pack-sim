import client from '~/providers/fetchClient'
import { BuildQueryParams, buildQueryParams } from '~/utils/buildQueryParams'

export const getBoosterPacks = (params?: BuildQueryParams) =>
  client.get(buildQueryParams('sets', params))

export const getCards = (params?: BuildQueryParams) =>
  client.get(buildQueryParams('cards', params))
