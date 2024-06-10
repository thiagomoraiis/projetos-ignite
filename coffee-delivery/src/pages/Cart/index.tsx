/* eslint-disable */
import * as zod from 'zod';
import { useContext } from 'react';
import { useTheme } from 'styled-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddressForm } from './components/AddressForm';
import { FormProvider, useForm } from 'react-hook-form';
import { CartContext } from '../../contexts/CartContext';
import { PaymentOptions } from './components/PaymentOptions';
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import { CardFinishPurchase } from './components/CardFinishPurchase';
import {
  AddressContainer,
  AddressHeader,
  Container,
  InfoContainer,
  PaymentContainer,
  PaymentHeader,
} from './styles';

export const cartFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, 'O CEP precisa ter exatamente 9 caracteres')
    .max(9, 'O CEP precisa ter exatamente 9 caracteres'),
  rua: zod.string().min(2, 'A rua precisa ter pelo menos 2 caracteres'),
  numero: zod
    .number()
    .min(1, 'O número precisa ser no mínimo 1')
    .max(999, 'O número precisa ser no máximo 999'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(2, 'O bairro precisa ter pelo menos 2 caracteres'),
  cidade: zod.string().min(4, 'A cidade precisa ter pelo menos 4 caracteres'),
  uf: zod.string(),
});

export type CartFormType = zod.infer<typeof cartFormValidationSchema>;

export function Cart() {
  const theme = useTheme();

  const cartForm = useForm<CartFormType>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })
  
  const { handleSubmit, reset } = cartForm
  const { handleCheckout, paymentMethod, deliveryForecast } = useContext(CartContext)

  function handleCoffeePurchase(formValues: CartFormType) {
    const { cep, ...address } = formValues
    const checkoutDetails = { address, paymentMethod, deliveryForecast }
    handleCheckout(checkoutDetails)
    reset()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCoffeePurchase)}>
        <FormProvider {...cartForm}>
          <InfoContainer>
            <h2>Complete seu pedido</h2>

            <AddressContainer>
              <AddressHeader>
                <MapPinLine
                  size={22}
                  weight="bold"
                  color={theme.colors['yellow-dark']}
                />
                <div>
                  <h3>Endereço de entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddressHeader>
              <AddressForm />
            </AddressContainer>

            <PaymentContainer>
              <PaymentHeader>
                <CurrencyDollar
                  size={22}
                  weight="bold"
                  color={theme.colors.purple}
                />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </PaymentHeader>
              <PaymentOptions />
            </PaymentContainer>
          </InfoContainer>

          <InfoContainer>
            <h2>Cafés selecionados</h2>
            <CardFinishPurchase />
          </InfoContainer>
        </FormProvider>
      </form>
    </Container>
  )
}
