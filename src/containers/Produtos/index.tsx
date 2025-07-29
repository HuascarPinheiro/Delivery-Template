import {
  AdicionarProduto,
  DescricaoProduto,
  ProdutoTitulo,
  ProdutoImagem
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const ProductItem = ({ nome, descricao, foto }: Props) => {
  const getDescription = (d: string) => {
    if (d.length > 216) {
      return d.slice(0, 216) + '...'
    } else {
      return d
    }
  }
  return (
    <>
      <ProdutoImagem src={foto} />
      <ProdutoTitulo>{nome}</ProdutoTitulo>
      <DescricaoProduto>{getDescription(descricao)}</DescricaoProduto>
      <AdicionarProduto>Adicionar ao carrinho</AdicionarProduto>
    </>
  )
}

export default ProductItem
