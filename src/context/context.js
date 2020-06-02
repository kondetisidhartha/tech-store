import React, { Component } from 'react'

const ProductContext = React.createContext();

// Provider
class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from product context">
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

// Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }