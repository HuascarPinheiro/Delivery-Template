import styled from 'styled-components'
import colors from '../../styles/colors'

import excluir from '../../assets/lixeira-de-reciclagem 1.png'
import close from '../../assets/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  aside {
    z-index: 1;
    width: 360px;
    padding: 32px 8px;
    background-color: ${colors.primaria};

    ul {
      margin-bottom: 40px;

      li {
        position: relative;
        display: flex;
        background-color: ${colors.secundaria};
        padding: 8px;
        margin-bottom: 16px;

        div {
          margin-left: 8px;

          h3 {
            margin-bottom: 16px;
          }
        }
      }
    }
  }
`

export const Item = styled.img`
  width: 80px;
  object-fit: cover;
  height: 80px;
`

export const Excluir = styled.button`
  position: absolute;
  background-color: transparent;
  background-image: url(${excluir});
  background-position: center;
  background-size: cover;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const Precos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secundaria};
`

export const Enviar = styled.button`
  width: 100%;
  background-color: ${colors.secundaria};
  color: ${colors.primaria};
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
  border: none;
  cursor: pointer;
`
export const Close = styled.button`
  display: none;

  @media (max-width: 426px) {
    position: absolute;
    background-color: transparent;
    background-image: url(${close});
    background-position: center;
    background-size: cover;
    right: 8px;
    top: 8px;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    outline: none;
    display: block;
  }
`
