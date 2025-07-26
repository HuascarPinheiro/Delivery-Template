import logo from '../../assets/logo.png'
import facebook from '../../assets/footerbrands/facebook.png'
import twitter from '../../assets/footerbrands/twitter.png'
import instagram from '../../assets/footerbrands/instagram.png'

import { CentralizarContainer } from '../../styles/containers'
import Logo from '../../styles/Logo'
import { Disclaimer, Icon, SocialLinks } from './styles'

const Footer = () => (
  <CentralizarContainer>
    <Logo src={logo} alt="Logo efood" />

    <SocialLinks>
      <li>
        <Icon src={facebook} alt="facebook" />
      </li>
      <li>
        <Icon src={twitter} alt="twitter" />
      </li>
      <li>
        <Icon src={instagram} alt="instagram" />
      </li>
    </SocialLinks>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </CentralizarContainer>
)

export default Footer
