import axios, { AxiosPromise } from 'axios'
import { ProductData } from '../interfaces/productsData'
import { useQuery } from '@tanstack/react-query'

const API_URL =
  'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'

const fecthData = async (): AxiosPromise<ProductData> => {
  const response = axios.get(API_URL + '/products', {
    params: {
      page: 1,
      rows: 8,
      sortBy: 'id',
      orderBy: 'ASC'
    }
  })
  return response
}

export function useProductsData() {
  const query = useQuery({
    queryFn: fecthData,
    queryKey: ['products-data']
  })
  return {
    ...query,
    data: query.data?.data
  }
}
