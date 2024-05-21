import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CardProductInCart } from './CardProductInCart'

export function ContainerCart() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const variants = {
    open: {
      height: '100%',
      width: '486px',
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

  return (
    <motion.nav className="relative z-10">
      <div
        className="flex flex-row px-[27px] py-[17px] bg-white rounded-lg gap-[30px]"
        onClick={() => setIsOpen(true)}
      >
        <img src="../assets/Vector.svg" alt="cart image" />
        <p id="countCart" className="text-black font-[700] text-[18px]">
          0
        </p>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className=" overflow-hidden bg-[#0F52BA] fixed right-0 top-0 pt-[36px] px-[40px] shadow-card-shadow"
      >
        <div
          ref={contentRef}
          className="shadow-slate-600 flex flex-row items-center justify-between relative"
        >
          <h3 className="text-[27px] font-bold leading-[40px] pb-[50px]">
            Carrinho <br /> de compras
          </h3>
          <img
            src="../assets/Close_cart.svg"
            alt="close cart image"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <CardProductInCart
          photo="../assets/iphone-x.png"
          name="Apple iPhoneX 128GB"
          price="399"
        />
        <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-around text-[28px] font-bold leading[15px]">
          <h3>Total:</h3>
          <p>R$293.33</p>
        </div>
      </motion.div>
    </motion.nav>
  )
}
