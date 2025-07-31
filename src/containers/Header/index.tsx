import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.png'
import { open } from '../../store/reducers/cart'

import Logo from '../../styles/Logo'
import { HeaderBar, HeaderContainer, Left, Right } from './styles'
import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.cart.itens)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderContainer>
        <Left to="/">Retaurantes</Left>
        <Logo src={logo} />
        <Right onClick={openCart}>{itens.length} produto(s) no carrinho</Right>
      </HeaderContainer>
    </HeaderBar>
  )
}

export default Header
