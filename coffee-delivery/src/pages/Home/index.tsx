import '../../../data.json'
import { useContext } from 'react'
import { Card } from './components/Card'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Home() {
  const { coffees } = useContext(CartContext)

  return (
    <main>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Heading>

            <Info>
              <div>
                <ShoppingCart size={16} weight="fill" />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package size={16} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer size={16} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee size={16} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>
        </HeroContent>

        <img src="/img/ImagemPrincipal.png" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card
              key={coffee.id}
              id={coffee.id}
              title={coffee.title}
              description={coffee.description}
              image={coffee.image}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </div>
      </CoffeeList>
    </main>
  )
}
