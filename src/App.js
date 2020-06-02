import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom'


import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Default from './pages/Default';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

import Navbar from './components/Navbar';
import Sidecart from './components/SideCart';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* navbar, sidebar, cart components*/}
      <Navbar />
      <Sidebar />
      <Sidecart />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>

      <Footer />
      {/* footer */}
    </>
  );
}

export default App;
