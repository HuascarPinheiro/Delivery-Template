import Container from '../../styles/containers'
import {
  RestaurantCategoria,
  RestaurantProfile,
  RestaurantTitulo
} from './styles'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const Banner = ({ capa, titulo, tipo }: Props) => {
  return (
    <RestaurantProfile style={{ backgroundImage: `url('${capa}')` }}>
      <Container>
        <RestaurantCategoria>{tipo}</RestaurantCategoria>
        <RestaurantTitulo>{titulo}</RestaurantTitulo>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
