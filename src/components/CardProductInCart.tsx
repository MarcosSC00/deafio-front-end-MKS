import { useContext } from 'react'
import { CartContext } from '../contexts/mycart'

interface CardProductInCartProps {
  id: number
  photo: string
  name: string
  price: number
  quantity: number
  anotherProduct: () => void
  oneLessProduct: () => void
}

export function CardProductInCart({
  id,
  photo,
  name,
  price,
  quantity,
  anotherProduct,
  oneLessProduct
}: CardProductInCartProps) {
  const formatPrice = Number(price).toFixed(0)
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }

  const { removeProduct } = cartContext

  return (
    <div className="relative max-w-[250px] md:max-w-[379px] flex flex-col md:flex-row items-center justify-between py-[19px] px-[23px] bg-white rounded-lg text-black">
      <img src={photo} alt="" className="h-[90px] md:mr-[21px]" />
      <p className="md:mr-[9px] mt-[14px] mb-[11px] text-[16px] md:text-[13px] font-normal md:max-w-[113px]">
        {name}
      </p>
      <div className="flex flex-row justify-between items-stretch h-full w-full">
        <div className="flex items-center">
          <p className="invisible md:visible text-[5px] font-normal">Qtd:</p>
          <div className="flex flex-row w-[90px] h-[34px]  md:w-[50px] border divide-x justify-around gap-[9px] rounded text-[20px] md:text-[10px] text-center px-[8px]">
            <button
              className="flex-1 content-center"
              onClick={oneLessProduct}
              disabled={quantity === 1}
            >
              -
            </button>
            <h2 className="flex-1">{quantity}</h2>
            <button className="flex-1" onClick={anotherProduct}>
              +
            </button>
          </div>
        </div>
        <h3
          id="priceCart"
          className="items- content-center font-bold text-[15px] bg-[#373737] text-white rounded-[5px] px-[10px]"
        >
          R${formatPrice}
        </h3>
      </div>
      <button onClick={() => removeProduct(id)}>
        <img
          src="src/assets/Close_cart.svg"
          alt=""
          className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[23px] md:w-[18px]"
        />
      </button>
    </div>
  )
}
