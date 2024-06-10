export type CoffeesType = {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export type StatesType = {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

export type CartProdutType = {
  id: string
  title: string
  image: string
  price: number
  quantity: number
}

export type AddressType = {
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
  complemento?: string | undefined
}

export type OrderInfoType = {
  address: AddressType
  paymentMethod: string
  deliveryForecast: string
}

export type CartContextType = {
  paymentMethod: string
  deliveryForecast: string
  coffees: CoffeesType[]
  orderInfo: OrderInfoType
  stateAcronym: StatesType[]
  cartProducts: CartProdutType[]
  handleDeleteCartItem(id: string): void
  onSetPaymentOption(method: string): void
  handleProductToCart(product: CartProdutType): void
  handleCheckout(checkoutDetails: OrderInfoType): void
  handleUpdateQuantity(id: string, quantity: number): void
}

export type CoffeeCardProps = {
  id: string
  title: string
  image: string
  price: number
  quantity: number
}
