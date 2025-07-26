import {
  AdicionarProduto,
  DescricaoProduto,
  ProdutoTitulo,
  ProdutoImagem
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductItem = ({ image, title, description }: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 216) {
      return d.slice(0, 216) + '...'
    } else {
      return d
    }
  }
  return (
    <>
      <ProdutoImagem src={image} />
      <ProdutoTitulo>{title}</ProdutoTitulo>
      <DescricaoProduto>{getDescription(description)}</DescricaoProduto>
      <AdicionarProduto>Adicionar ao carrinho</AdicionarProduto>
    </>
  )
}

export default ProductItem
