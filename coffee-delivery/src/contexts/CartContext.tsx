import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CartContextType,
  CartProdutType,
  CoffeesType,
  OrderInfoType,
  StatesType,
} from '../@types/cart'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState([] as CartProdutType[])
  const [coffees, setCoffees] = useState([] as CoffeesType[])
  const [stateAcronym, setStateAcronym] = useState([] as StatesType[])
  const [orderInfo, setOrderInfo] = useState({} as OrderInfoType)
  const [paymentMethod, setPaymentMethod] = useState('')

  const navigate = useNavigate()
  const deliveryForecast = '20 minutos - 30 minutos'

  useEffect(() => {
    async function getCoffees() {
      const url = '../../../data.json'
      const json = await fetch(url)
      const content = await json.json()
      const coffees: CoffeesType[] = content.coffees
      setCoffees(coffees)
    }
    getCoffees()
  }, [])

  useEffect(() => {
    async function getUFS() {
      const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      const json = await fetch(url)
      const content = await json.json()
      const estados: StatesType[] = content
      setStateAcronym(estados)
    }
    getUFS()
  }, [])

  function handleProductToCart(product: CartProdutType) {
    const itemAlreadyExistsInCart = cartProducts.some(
      (coffee) => coffee.id === product.id,
    )

    if (itemAlreadyExistsInCart) {
      setCartProducts((state) =>
        state.map((coffee) => {
          if (coffee.id === product.id) {
            return {
              ...coffee,
              quantity: coffee.quantity + product.quantity,
            }
          }
          return coffee
        }),
      )
      return
    }

    setCartProducts((state) => [...state, product])
  }

  function handleUpdateQuantity(id: string, quantity: number) {
    setCartProducts((state) =>
      state.map((coffee) =>
        coffee.id === id ? { ...coffee, quantity } : coffee,
      ),
    )
  }

  function handleDeleteCartItem(id: string) {
    setCartProducts((state) => state.filter((coffee) => coffee.id !== id))
  }

  function onSetPaymentOption(method: string) {
    setPaymentMethod(method)
  }

  function handleCheckout(checkoutDetails: OrderInfoType) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setOrderInfo(checkoutDetails)
    navigate('/success')
    setCartProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        orderInfo,
        cartProducts,
        stateAcronym,
        paymentMethod,
        handleCheckout,
        deliveryForecast,
        onSetPaymentOption,
        handleProductToCart,
        handleUpdateQuantity,
        handleDeleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
