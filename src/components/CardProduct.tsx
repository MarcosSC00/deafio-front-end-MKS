import { CardProps } from '../interfaces/cardsProps'

export function CardProduct({ name, description, price, photo }: CardProps) {
  return (
    <div className="w-[218px] flex flex-col justify-between text-center shadow-card-shadow rounded-lg pt-[20px] mx-auto bg-white">
      <img src={photo} alt="" className="px-[34px]" />
      <div className="flex flex-row gap-[4px] px-[14px] justify-between items-center">
        <h3 className="font-normal text-[16px] leading-[19px] text-left">
          {name}
        </h3>
        <h2 className="px-[6px] py-[4px] m-h-[26px]  rounded-[5px] bg-[#373737] content-center font-bold text-sm text-white">
          R${price}
        </h2>
      </div>
      <p className="text-[10px] font-light px-[14px] text-left text-[#2C2C2C] leading-[12px] pt-[17px] pb-[12px] overflow-hidden">
        {description}
      </p>
      <button className=" w-full bg-[#0F52BA] rounded-b-lg ">
        <div className="flex flex-row gap-[14px] justify-center py-[8px]">
          <img src="\src\assets\shopping-bag.svg" alt="" />
          <h2 className="font-semibold text-[14px] leading-[18px] text-white">
            COMPRAR
          </h2>
        </div>
      </button>
    </div>
  )
}
