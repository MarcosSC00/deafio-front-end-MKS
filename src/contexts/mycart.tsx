import { ReactNode, createContext, useState } from 'react'
import { CardProps } from '../interfaces/cardsProps'

export type Cart = {
  products: CardProps[]
  setProduct: (product: CardProps) => void
  removeProduct: (id: number) => void
}

export const CartContext = createContext<Cart | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<CardProps[]>([])

  const setProduct = (product: CardProps) => {
    setProducts(prevProducts => {
      const productIndex = prevProducts.findIndex(p => p.id === product.id)
      if (productIndex !== -1) {
        alert('O produto já está no carrinho.')
        const updateProducts = [...prevProducts]
        updateProducts[productIndex].quantity += product.quantity
        return updateProducts
      }
      return [...prevProducts, { ...product, quantity: product.quantity }]
    })
  }

  const removeProduct = (id: number) => {
    setProducts(prevProducts =>
      prevProducts.filter(product => product.id !== id)
    )
  }

  return (
    <CartContext.Provider value={{ products, setProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
