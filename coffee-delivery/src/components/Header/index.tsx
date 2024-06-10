import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Aside, HeaderContainer, Quantity } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  const { cartProducts } = useContext(CartContext)
  const cartLength = cartProducts.length
  const cartIsEmpty = cartLength === 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/img/Logo.svg" alt="Logotipo da página" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>José da Penha, RN</span>
        </div>

        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {!cartIsEmpty && <Quantity>{cartLength}</Quantity>}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
