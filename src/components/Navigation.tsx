import { ContainerCart } from './ContainerCart'

export function Navigation() {
  return (
    <nav className="w-full flex flex-row justify-between items-center text-white bg-[rgb(15,82,186)] px-5 md:px-[68px] py-[28px]">
      <div className="flex flex-row items-baseline gap-1.5">
        <h2 className="font-semibold text-[40px]">MKS</h2>
        <h4 className="text-[20px] font-light">Sistemas</h4>
      </div>
      <ContainerCart />
    </nav>
  )
}
