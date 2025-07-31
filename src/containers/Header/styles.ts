import { Link } from 'react-router-dom'
import fundoHero from '../../assets/fundoHero.png'

import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderBar = styled.header`
  background-image: url('${fundoHero}');
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 625px) {
    display: block;
    text-align: center;
  }
`

export const Left = styled(Link)`
  position: absolute;
  color: ${colors.primaria};
  left: 0;

  &:hover {
    color: ${colors.btnpointer};
  }

  @media (max-width: 625px) {
    position: static;
    display: block;
    margin-bottom: 5px;
  }
`
export const Right = styled.button`
  position: absolute;
  color: ${colors.primaria};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  right: 0;

  @media (max-width: 798px) {
    display: block;
    position: static;
    margin: 0 auto;
  }
`
