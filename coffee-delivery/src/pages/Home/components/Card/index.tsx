import { useContext, useState } from 'react'
import { AddCartButton } from '../AddCartButton'
import { CoffeesType } from '../../../../@types/cart'
import { Counter } from '../../../../components/Counter'
import { CartContext } from '../../../../contexts/CartContext'
import {
  Buy,
  CardContainer,
  CardContent,
  FooterContainer,
  Tags,
} from './styles'

export function Card({
  id,
  title,
  description,
  image,
  price,
  tags,
}: CoffeesType) {
  const { handleProductToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  function handleAddProductToCart() {
    handleProductToCart({ id, title, image, quantity, price })
  }

  function handleIncreaseCartItem() {
    if (quantity >= 99) return
    setQuantity((state) => state + 1)
  }

  function handleDecreaseCartItem() {
    if (quantity <= 1) return
    setQuantity((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={image} alt={`Image de um cafe ${title}`} />

      <Tags>
        {tags.map((tag) => (
          <li key={tag}>{tag.toUpperCase()}</li>
        ))}
      </Tags>

      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>

      <FooterContainer>
        <p>
          R$ <span>{price.toFixed(2)}</span>
        </p>

        <Buy>
          <Counter
            quantity={quantity}
            onDecreaseCartItem={handleDecreaseCartItem}
            onIncreaseCartItem={handleIncreaseCartItem}
          />

          <AddCartButton onAddProductToCart={handleAddProductToCart} />
        </Buy>
      </FooterContainer>
    </CardContainer>
  )
}
