export interface BuildQueryParams {
  q?: string
  page?: number
  pageSize?: number
  orderBy?: string
  select?: string
}

export const buildQueryParams = (url: string, params?: BuildQueryParams) => {
  {
    if (params && Object.values(params).length > 0) {
      const { q, page, pageSize, orderBy, select } = params

      const URLParams = new URLSearchParams()

      if (q && q !== '') URLParams.append('q', q)
      if (page) URLParams.append('page', page.toString())
      if (pageSize) URLParams.append('pageSize', pageSize.toString())
      if (orderBy && orderBy !== '') URLParams.append('orderBy', orderBy)
      if (select && select !== '') URLParams.append('select', select)

      if (URLParams.toString() === '') return url

      return `${url}?${URLParams.toString()}`
    }
    return url
  }
}
