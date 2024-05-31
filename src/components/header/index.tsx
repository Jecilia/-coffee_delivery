import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderConatiner } from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderConatiner>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <aside>
        <div>
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="Checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </aside>
    </HeaderConatiner>
  )
}
