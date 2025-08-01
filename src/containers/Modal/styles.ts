import styled from 'styled-components'
import colors from '../../styles/colors'

import close from '../../assets/close 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  button {
    &.close {
      display: none;

      @media (max-width: 426px) {
        display: block;
        background-image: url(${close});
        background-size: cover;
        background-color: transparent;
        background-position: center;
        position: absolute;
        right: 8px;
        top: 8px;
        width: 16px;
        height: 16px;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }

    &.btn {
      background-color: ${colors.secundaria};
      color: ${colors.primaria};
      font-weight: 700;
      font-size: 14px;
      padding: 4px;
      width: 100%;
      border: none;
      cursor: pointer;
      display: block;
      margin: 8px 0;
    }
  }

  &.is-open {
    display: flex;
  }

  aside {
    z-index: 1;
    background-color: ${colors.primaria};
    padding: 32px 8px;
    width: 360px;
    color: ${colors.secundaria};
    font-weight: 700;
    font-size: 14px;

    h4 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 16px;
      font-weight: 400;
      line-height: 22px;
    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
      background-color: ${colors.secundaria};
      border: none;

      &.error {
        border: 3px solid red;
      }
    }
  }
`
