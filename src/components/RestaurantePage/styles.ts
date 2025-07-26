import styled from 'styled-components'
import colors from '../../styles/colors'

export const RestaurantSection = styled.section`
  background-color: ${colors.background};
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.34%;

  li {
    background-color: ${colors.primaria};
    color: ${colors.secundaria};
    padding: 8px;
    margin-bottom: 32px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.34%;
  }
`
