import { useState } from 'react'

interface CardProductInCartProps {
  photo: string
  name: string
  price: string
}

export function CardProductInCart({
  photo,
  name,
  price
}: CardProductInCartProps) {
  const [addProtuct, setAddProduct] = useState(1)
  function addItem() {
    setAddProduct(addProtuct + 1)
  }

  function removeItem() {
    setAddProduct(addProtuct - 1)
  }

  return (
    <div className="relative max-w-[379px] flex flex-row items-center justify-between py-[19px] px-[23px] bg-white rounded-lg text-black">
      <img src={photo} alt="" className="h-[50px] mr-[21px]" />
      <p className="mr-[9px] text-[13px] font-normal max-w-[113px]">{name}</p>
      <div className="w-[50px] items-center">
        <p className="text-[5px] font-normal">Qtd:</p>
        <div className="flex flex-row w-[50px] border divide-x justify-around gap-[9px] rounded text-[10px] text-center px-[8px]">
          <button
            className="flex-1"
            onClick={removeItem}
            disabled={addProtuct === 0}
          >
            -
          </button>
          <h2 className="flex-1">{addProtuct}</h2>
          <button className="flex-1" onClick={addItem}>
            +
          </button>
        </div>
      </div>
      <h3 id="priceCart" className="font-bold text-[14px] ">
        R${price}
      </h3>
      <img
        src="../assets/Close_cart.svg"
        alt=""
        className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2"
        width="18px"
        height="18px"
      />
    </div>
  )
}
