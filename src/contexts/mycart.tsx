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
        const existingProducts = updateProducts[productIndex]
        updateProducts[productIndex] = {
          ...existingProducts,
          quantity: (existingProducts.quantity || 0) + (product.quantity || 0)
        }
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
