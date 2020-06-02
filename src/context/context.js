import React, { Component } from 'react'

const ProductContext = React.createContext();

// Provider
class ProductProvider extends Component {

  state = {
    sideBarOpen: false,
    sideCartOpen: false,
    cartItems: 0
  }

  sideBarHandler = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    })
  }

  sideCartHandler = () => {
    this.setState({
      sideCartOpen: !this.state.sideCartOpen
    })
  }

  closeCart = () => {
    this.setState({
      sideCartOpen: false
    })
  }

  openCart = () => {
    this.setState({
      sideCartOpen: true
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        sideBarHandler: this.sideBarHandler,
        sideCartHandler: this.sideCartHandler,
        closeCart: this.closeCart,
        openCart: this.openCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

// Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }