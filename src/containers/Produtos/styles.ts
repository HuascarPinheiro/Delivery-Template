import styled from 'styled-components'
import colors from '../../styles/colors'

export const ProdutoImagem = styled.img`
  display: block;
  object-fit: cover;
  height: 164px;
  width: 100%;
`

export const ProdutoTitulo = styled.h3`
  margin-bottom: 8px;
`

export const DescricaoProduto = styled.p`
  margin-bottom: 8px;
`

export const AdicionarProduto = styled.button`
  width: 100%;
  border: none;
  padding: 4px 0;
  font-weight: bold;
  color: ${colors.primaria};
  background-color: ${colors.secundaria};
  font-size: 14px;
  cursor: pointer;
`
