import { useContext } from 'react'
import { CardProps } from '../interfaces/cardsProps'
import { CartContext } from '../contexts/mycart'

export function CardProduct(product: CardProps) {
  const formatPrice = Number(product.price).toFixed(0)
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }
  const { setProduct } = cartContext

  function handleAddToCart() {
    setProduct({ ...product, quantity: 1 })
  }

  return (
    <div className="w-[251px] md:w-[218px] flex flex-col justify-between text-center shadow-card-shadow rounded-lg pt-[20px] mx-auto bg-white">
      <img src={product.photo} alt="" className="px-[34px]" />
      <div className="flex flex-row gap-[4px] px-[14px] justify-between items-center">
        <h3 className="font-normal text-[16px] leading-[19px] text-left">
          {product.name}
        </h3>
        <h2 className="px-[6px] py-[4px] m-h-[26px]  rounded-[5px] bg-[#373737] content-center font-bold text-sm text-white">
          R${formatPrice}
        </h2>
      </div>
      <p className="text-[10px] font-light px-[14px] text-left text-[#2C2C2C] leading-[12px] pt-[17px] pb-[12px] overflow-hidden">
        {product.description}
      </p>
      <button
        className=" w-full bg-[#0F52BA] rounded-b-lg "
        onClick={handleAddToCart}
      >
        <div className="flex flex-row gap-[14px] justify-center py-[8px]">
          <img src="../assets/shopping-bag.svg" alt="" />
          <h2 className="font-semibold text-[14px] leading-[18px] text-white">
            COMPRAR
          </h2>
        </div>
      </button>
    </div>
  )
}
