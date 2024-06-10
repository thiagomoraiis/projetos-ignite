import { Minus, Plus } from '@phosphor-icons/react'
import {
  CounterContainer,
  DecreaseButton,
  IncreaseButton,
  Quantity,
} from './styles'

type CounterProps = {
  quantity: number
  onIncreaseCartItem(): void
  onDecreaseCartItem(): void
}

export function Counter({
  quantity,
  onDecreaseCartItem,
  onIncreaseCartItem,
}: CounterProps) {
  return (
    <CounterContainer>
      <DecreaseButton type="button" onClick={onDecreaseCartItem}>
        <Minus width={22} weight="bold" />
      </DecreaseButton>

      <Quantity>{quantity}</Quantity>

      <IncreaseButton type="button" onClick={onIncreaseCartItem}>
        <Plus width={22} weight="bold" />
      </IncreaseButton>
    </CounterContainer>
  )
}
