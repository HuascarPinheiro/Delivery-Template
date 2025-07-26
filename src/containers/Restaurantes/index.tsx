import RestaurantModel from '../../models/RestaurantModels'

import {
  Categories,
  Category,
  SaibaMais,
  Score,
  Space,
  Star,
  DescriptionRestaurant,
  ContainerRestaurant,
  Card,
  Image
} from './styles'

type Props = RestaurantModel

const RestaurantItem = ({
  id,
  title,
  category,
  description,
  image,
  rating
}: Props) => (
  <Card>
    <Categories>
      {category.map((c) => (
        <Category key={c}>{c}</Category>
      ))}
    </Categories>
    <Image src={image} alt={title} />
    <ContainerRestaurant>
      <Space>
        <h3>{title}</h3>
        <Score>
          <h3>{rating}</h3>
          <Star className="bi bi-star-fill"></Star>
        </Score>
      </Space>
      <DescriptionRestaurant>{description}</DescriptionRestaurant>
      <SaibaMais to={`/perfil/${id}`}>Saiba Mais</SaibaMais>
    </ContainerRestaurant>
  </Card>
)

export default RestaurantItem
