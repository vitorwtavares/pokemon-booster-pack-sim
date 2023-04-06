export interface BuildQueryParams {
  q?: string
  page?: string
  pageSize?: string
  orderBy?: string
  select?: string
}

export const buildQueryParams = (url: string, params?: BuildQueryParams) => {
  {
    if (params && Object.values(params).length > 0) {
      const { q, page, pageSize, orderBy, select } = params

      const URLParams = new URLSearchParams()

      if (q && q !== '') URLParams.append('q', q)
      if (page && page !== '') URLParams.append('page', page)
      if (pageSize && pageSize !== '') URLParams.append('pageSize', pageSize)
      if (orderBy && orderBy !== '') URLParams.append('orderBy', orderBy)
      if (select && select !== '') URLParams.append('select', select)

      if (URLParams.toString() === '') return url

      return `${url}?${URLParams.toString()}`
    }
    return url
  }
}
