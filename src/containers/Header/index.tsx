import logo from '../../assets/logo.png'

import Logo from '../../styles/Logo'
import { HeaderBar, HeaderContainer, Left, Right } from './styles'

const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <Left to="/">Retaurantes</Left>
      <Logo src={logo} />
      <Right to="#">0 produto(s) no carrinho</Right>
    </HeaderContainer>
  </HeaderBar>
)

export default Header
