import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { ProtuctGrid } from './components/ProductGrid'
import { CartProvider } from './contexts/mycart'

export function App() {
  return (
    <div>
      <CartProvider>
        <Navigation />
        <ProtuctGrid />
        <Footer />
      </CartProvider>
    </div>
  )
}
