import { ShoppingCart } from '@phosphor-icons/react'
import { CartButtonContainer } from './styles'
import { AddCartButtonProps } from '../../../../@types/home'

export function AddCartButton({ onAddProductToCart }: AddCartButtonProps) {
  return (
    <CartButtonContainer onClick={onAddProductToCart}>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
