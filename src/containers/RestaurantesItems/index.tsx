import {
  Categories,
  SaibaMais,
  Score,
  Space,
  Star,
  DescriptionRestaurant,
  ContainerRestaurant,
  Card,
  Image
} from './styles'

type Props = {
  id: number
  title: string
  category: string
  description: string
  image: string
  rating: number
  destacado: boolean
}

const RestaurantItem = ({
  id,
  title,
  category,
  description,
  image,
  rating,
  destacado
}: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 290) {
      return d.slice(0, 290) + '...'
    } else {
      return d
    }
  }

  return (
    <Card>
      <Categories>
        <li className={destacado ? '' : 'destaqueOff'}>Destaque</li>
        <li>{category}</li>
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
        <DescriptionRestaurant>
          {getDescription(description)}
        </DescriptionRestaurant>
        <SaibaMais to={`/perfil/${id}`}>Saiba Mais</SaibaMais>
      </ContainerRestaurant>
    </Card>
  )
}

export default RestaurantItem
