import { useGetRestaurantsQuery } from '../../services/api'

import Container from '../../styles/containers'
import RestaurantItem from '../../containers/RestaurantesItems'
import { RestauranteList, RestauranteSection } from './styles'
import { Loading } from '../../styles/loading'

const Restaurants = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (isLoading) return <Loading>Carregando...</Loading>

  return (
    <RestauranteSection>
      <Container>
        <RestauranteList>
          {restaurants?.map((r) => (
            <RestaurantItem
              key={r.id}
              title={r.titulo}
              category={r.tipo}
              description={r.descricao}
              image={r.capa}
              rating={r.avaliacao}
              id={r.id}
              destacado={r.destacado}
            />
          ))}
        </RestauranteList>
      </Container>
    </RestauranteSection>
  )
}

export default Restaurants
