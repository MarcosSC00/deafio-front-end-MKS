export interface ProductData {
  products: {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
  }[]
  count: number
}
