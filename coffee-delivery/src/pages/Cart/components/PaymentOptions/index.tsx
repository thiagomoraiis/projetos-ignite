import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { CartContext } from '../../../../contexts/CartContext'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { ButtonOption, PaymentOptionsContainer } from './styles'

export function PaymentOptions() {
  const theme = useTheme()
  const { onSetPaymentOption } = useContext(CartContext)

  return (
    <PaymentOptionsContainer>
      <ButtonOption
        type="button"
        name="credit"
        onClick={() => onSetPaymentOption('Cartão de Crédito')}
      >
        <CreditCard size={16} weight="regular" color={theme.colors.purple} />
        <span>Cartão de Crédito</span>
      </ButtonOption>

      <ButtonOption
        type="button"
        name="debit"
        onClick={() => onSetPaymentOption('Cartão de Débito')}
      >
        <Bank size={16} weight="regular" color={theme.colors.purple} />
        <span>Cartão de Débito</span>
      </ButtonOption>

      <ButtonOption
        type="button"
        name="money"
        onClick={() => onSetPaymentOption('Dinheiro')}
      >
        <Money size={16} weight="regular" color={theme.colors.purple} />
        <span>Dinheiro</span>
      </ButtonOption>
    </PaymentOptionsContainer>
  )
}
