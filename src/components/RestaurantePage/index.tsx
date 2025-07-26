import ProductModel from '../../models/ProductModels'

import ProductItem from '../../containers/Produtos'
import Container from '../../styles/containers'
import { ProductList, RestaurantSection } from './styles'

type Props = {
  produto: ProductModel[]
}

const RestaurantPage = ({ produto }: Props) => {
  return (
    <RestaurantSection>
      <Container>
        <ProductList>
          {produto.map((p) => (
            <li key={p.id}>
              <ProductItem
                title={p.title}
                description={p.description}
                image={p.image}
              />
            </li>
          ))}
        </ProductList>
      </Container>
    </RestaurantSection>
  )
}

export default RestaurantPage
