import { ContainerCart } from './ContainerCart'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center text-white bg-[rgb(15,82,186)] px-[68px] py-[28px]">
      <div className="flex flex-row items-baseline gap-1.5">
        <h2 className="font-semibold text-[40px]">MKS</h2>
        <h4 className="text-[20px] font-light">Sistemas</h4>
      </div>
      {/* <div className="flex flex-row px-[27px] py-[17px] bg-white rounded-lg gap-[30px]">
        <img src="\src\assets\Vector.svg" alt="cart image" />
        <p id="countCart" className="text-black font-[700] text-[18px]">
          0
        </p>
      </div> */}
      <ContainerCart />
    </header>
  )
}
