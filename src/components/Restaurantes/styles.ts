import styled from 'styled-components'
import colors from '../../styles/colors'

export const RestauranteSection = styled.section`
  background-color: ${colors.background};
`

export const RestauranteList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6%;

  @media (max-width: 768px) {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }
`
