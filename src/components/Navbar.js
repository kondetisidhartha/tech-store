import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, sideBarHandler, sideCartHandler } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={sideBarHandler} />
              <img src={logo} alt="logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={sideCartHandler} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`
  position: sticky;
  top : 0;
  width : 100%;
  padding : 1rem 1.5rem;
  background : var(--mainGray);
  border-bottom : 3px solid var(--primaryColor);

  .nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-icon{
    font-size : 1.5rem;
    cursor: pointer;
  }

  .nav-cart{
    position: relative;
  }

  .cart-items{
    position : absolute;
    top : -45%;
    right: -45%;
    background: var(--primaryColor);
    padding: 0 0.3rem;
    border-radius: 50%;
  }
`;