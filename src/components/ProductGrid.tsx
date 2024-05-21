import { CardProduct } from './CardProduct'
import { useProductsData } from '../hooks/useProductsData'

export function ProtuctGrid() {
  const { data } = useProductsData()
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-[22px] max-w-[938px] mx-auto mt-[116px] pb-10">
        {data?.products.map(product => (
          <CardProduct
            key={product.id}
            id={product.id}
            description={product.description}
            name={product.name}
            photo={product.photo}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
