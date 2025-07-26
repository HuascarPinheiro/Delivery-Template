import logo from '../../assets/logo.png'
import { Descricao, HeroCSS } from './styles'
import { CentralizarContainer } from '../../styles/containers'
import Logo from '../../styles/Logo'

const Hero = () => (
  <HeroCSS>
    <CentralizarContainer>
      <Logo src={logo} alt="Logo efood" />
      <Descricao>
        Viva experiências gastronômicas no conforto da sua casa
      </Descricao>
    </CentralizarContainer>
  </HeroCSS>
)

export default Hero
