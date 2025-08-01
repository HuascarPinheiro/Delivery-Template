import { Link } from 'react-router-dom'
import colors from '../../styles/colors'
import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: 1px solid ${colors.primaria};
  background-color: #fff;
  margin-bottom: 48px;
`

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 216px;
  object-fit: cover;
`

export const Categories = styled.ul`
  position: absolute;
  display: flex;
  right: 0;
  margin: 16px;
  text-transform: capitalize;

  li {
    background-color: ${colors.primaria};
    color: ${colors.secundaria};
    margin-left: 8px;
    padding: 6px 4px;
    font-size: 12px;
    font-weight: bold;
  }

  .destaqueOff {
    display: none;
  }
`

export const Category = styled.li`
  background-color: ${colors.primaria};
  color: ${colors.secundaria};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  margin-left: 8px;
`

export const ContainerRestaurant = styled.div`
  padding: 8px;
  padding-top: 0px;
`

export const Space = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const DescriptionRestaurant = styled.p`
  margin-bottom: 16px;
`

export const Score = styled.span`
  display: flex;
  align-items: center;
`

export const Star = styled.i`
  font-size: 1.5em;
  margin-left: 8px;
  color: ${colors.amarelo};
`

export const SaibaMais = styled(Link)`
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  padding: 4px 6px;
  color: ${colors.secundaria};
  background-color: ${colors.primaria};

  &:hover {
    background-color: ${colors.btnpointer};
    color: ${colors.secundaria};
  }
`

export const Tag = styled.div`
  padding: 8px;
  background-color: #fff;
`
