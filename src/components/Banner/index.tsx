import RestaurantModel from '../../models/RestaurantModels'
import Container from '../../styles/containers'
import {
  RestaurantCategoria,
  RestaurantProfile,
  RestaurantTitulo
} from './styles'

type Props = {
  restaurant: RestaurantModel
}

const Banner = ({ restaurant }: Props) => {
  return (
    <RestaurantProfile
      style={{ backgroundImage: `url('${restaurant.image}')` }}
    >
      <Container>
        <RestaurantCategoria>Italiana</RestaurantCategoria>
        <RestaurantTitulo>La Dolce Vita Trattoria</RestaurantTitulo>
      </Container>
    </RestaurantProfile>
  )
}

export default Banner
