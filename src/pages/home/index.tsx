import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import hero from '../../assets/hero.svg'
import herobg from '../../assets/hero-bg.svg'
import { HeroContainer, HeroContent, Item } from './styles'
import { ItemHero } from '../../components/item-hero'
export function Home() {
  return (
    <main>
      <HeroContainer>
        <HeroContent>
          <div>
            <h1>
              Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </p>
            <Item>
              <ItemHero />
              <div>
                <Timer size={24} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Package size={24} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Coffee size={24} weight="fill" />
                <span>O café chega fresquinho até você </span>
              </div>
            </Item>
          </div>
          <img
            src={hero}
            alt="Um copo de Café do Coffee Delivery com café, duas tigelas pretas e um objetivo contendo café em graus do lado direito, e do esquedo apenas graus de café no lado inferior"
          />
        </HeroContent>
        <img src={herobg} alt="" id="herobg" />
      </HeroContainer>
    </main>
  )
}
