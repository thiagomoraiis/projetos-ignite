import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { Trash } from '@phosphor-icons/react'
import { Counter } from '../../../../components/Counter'
import { CoffeeCardProps } from '../../../../@types/cart'
import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import {
  CoffeeActions,
  CoffeeContainer,
  Details,
  Price,
  RemoveButton,
} from './styles'

export function CoffeeCard({
  id,
  title,
  image,
  price,
  quantity,
}: CoffeeCardProps) {
  const theme = useTheme()
  const { handleUpdateQuantity, handleDeleteCartItem } = useContext(CartContext)
  const totalUnitPrice = quantity * price

  function handleIncreaseCartItem() {
    if (quantity >= 99) return
    handleUpdateQuantity(id, quantity + 1)
  }

  function handleDecreaseCartItem() {
    if (quantity <= 1) return
    handleUpdateQuantity(id, quantity - 1)
  }

  return (
    <CoffeeContainer>
      <div>
        <img src={image} alt={`Imagem de um café ${title}`} />

        <Details>
          <h3>{title}</h3>

          <CoffeeActions>
            <Counter
              quantity={quantity}
              onIncreaseCartItem={handleIncreaseCartItem}
              onDecreaseCartItem={handleDecreaseCartItem}
            />
            <RemoveButton
              type="button"
              onClick={() => handleDeleteCartItem(id)}
            >
              <Trash size={16} weight="bold" color={theme.colors.purple} />
              Remover
            </RemoveButton>
          </CoffeeActions>
        </Details>
      </div>
      <Price>{formatCurrency(totalUnitPrice)}</Price>
    </CoffeeContainer>
  )
}
