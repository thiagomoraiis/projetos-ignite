import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  Info,
  OrderInfo,
  SuccessContainer,
  SuccessHeader,
  SuccessInfo,
} from './styles'

export function Success() {
  const { orderInfo } = useContext(CartContext)
  const { address, deliveryForecast, paymentMethod } = orderInfo

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessInfo>
        <OrderInfo>
          <Info variant="purple">
            <MapPin weight="fill" size={16} />
            <p>
              Entrega em
              <strong>
                {' '}
                Rua {address.rua}, {address.numero}
              </strong>
              <br />
              {address.bairro} - {address.cidade}, {address.uf}
            </p>
          </Info>

          <Info variant="yellow">
            <Timer weight="fill" size={16} />
            <p>
              Previsão de entrega
              <br />
              <strong>{deliveryForecast}</strong>
            </p>
          </Info>

          <Info variant="yellow-dark">
            <CurrencyDollar weight="regular" size={16} />
            <p>
              Pagamento na entrega
              <br />
              <strong>{paymentMethod}</strong>
            </p>
          </Info>
        </OrderInfo>

        <img
          src="/img/Illustration.svg"
          alt="Imagem ilustrativa de um boneco em uma moto"
        />
      </SuccessInfo>
    </SuccessContainer>
  )
}
