import { useContext, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CardProductInCart } from './CardProductInCart'
import { CartContext } from '../contexts/mycart'

type Quantities = {
  [key: number]: number
}

export function ContainerCart() {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }
  const { products } = cartContext
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [quantities, setQuantities] = useState<Quantities>(
    products.reduce((acc, product) => {
      acc[product.id] = 1
      return acc
    }, {} as Quantities)
  )
  const variants = {
    open: {
      height: '100%',
      width: ['full', '80%'],
      maxWidth: '486px',
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  function initializeQuantity(id: number) {
    setQuantities(prev => ({
      ...prev,
      [id]: 1
    }))
  }

  function anotherProduct(id: number) {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  function oneLessProduct(id: number) {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) - 1 }))
  }

  const totalPayment = () => {
    return products
      .reduce((total, product) => {
        const productTotal = product.price * (quantities[product.id] || 1)
        return total + productTotal
      }, 0)
      .toFixed(0)
  }

  products.forEach(product => {
    if (quantities[product.id] === undefined) {
      initializeQuantity(product.id)
    }
  })

  return (
    <motion.nav className="relative z-10">
      <div
        className="flex flex-row px-[27px] py-[17px] bg-white rounded-lg gap-[30px]"
        onClick={() => setIsOpen(true)}
      >
        <button className="flex flex-row gap-4 items-center">
          <img src="/Vector.svg" alt="cart image" />
          <p id="countCart" className="text-black font-[700] text-[18px]">
            {products.length}
          </p>
        </button>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className=" overflow-hidden bg-[#0F52BA] fixed right-0 top-0 pt-[36px] px-[40px] shadow-card-shadow"
      >
        <div
          ref={contentRef}
          className="shadow-slate-600 flex flex-row items-center justify-between relative pb-[50px]"
        >
          <h3 className="text-[27px] font-bold leading-[40px]">
            Carrinho <br /> de compras
          </h3>
          <button onClick={() => setIsOpen(false)}>
            <img src="/Close_cart.svg" alt="close cart image" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {products.map(product => (
            <CardProductInCart
              key={product.id}
              id={product.id}
              photo={product.photo}
              name={product.name}
              price={product.price}
              quantity={quantities[product.id]}
              anotherProduct={() => anotherProduct(product.id)}
              oneLessProduct={() => oneLessProduct(product.id)}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div>
            <div className="flex flex-row justify-around text-[28px] font-bold leading[15px] pb-[42px]">
              <h3>Total:</h3>
              <p>R${totalPayment()}</p>
            </div>

            <button className="w-full text-[28px] font-bold pt-[39px] pb-[42px] bg-black">
              Finalizar compra
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
