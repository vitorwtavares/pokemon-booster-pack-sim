interface PackImage {
  logo: string
  symbol: string
}

export interface Pack {
  id: string
  images: PackImage
  name: string
  total: number
}
