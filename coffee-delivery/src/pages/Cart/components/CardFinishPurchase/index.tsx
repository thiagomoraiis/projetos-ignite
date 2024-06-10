import { useContext } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { useFormContext } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { CartTotalContainer, ConfirmButton, TotalContainer } from './styles'

export function CardFinishPurchase() {
  const { cartProducts, paymentMethod } = useContext(CartContext)
  const { watch } = useFormContext()

  const watchedFields = watch()
  const cartIsEmpty = cartProducts.length === 0
  const deliveryFee = !cartIsEmpty ? 3.5 : 0

  const subTotal = cartProducts.reduce((acc, item) => {
    acc += item.price * item.quantity
    return acc
  }, 0)

  const totalValue = cartProducts ? subTotal + deliveryFee : subTotal + 0

  const isAnyFieldEmpty = Object.values(watchedFields).some(
    (value) => value === '',
  )

  const isSubmitNotDisabled =
    !isAnyFieldEmpty && paymentMethod !== '' && !cartIsEmpty

  return (
    <CartTotalContainer>
      {cartProducts.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          id={coffee.id}
          title={coffee.title}
          image={coffee.image}
          price={coffee.price}
          quantity={coffee.quantity}
        />
      ))}

      <TotalContainer>
        <div>
          <p>Total de itens</p>
          <p>{formatCurrency(subTotal)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>{formatCurrency(deliveryFee)}</p>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{formatCurrency(totalValue)}</strong>
        </div>
      </TotalContainer>

      <ConfirmButton disabled={!isSubmitNotDisabled}>
        Confirmar pedido
      </ConfirmButton>
    </CartTotalContainer>
  )
}
