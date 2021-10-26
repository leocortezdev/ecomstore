import React from 'react';
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import SingleProduct from './pages/SingleProduct';
import Register from './pages/Register';
import Login from './pages/Login';
import CheckoutCart from './pages/CheckoutCart';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
   return (
       <Switch>
           <Route path="/register">
                <Register />
           </Route>
           <Route path="/login">
               <Login />
           </Route>
           <Route path="/items">
               <ProductList />
           </Route>
           <Route path="/checkout">
               <CheckoutCart />
           </Route>

           <Route path="/">
                <Home />
           </Route>
       </Switch>
   )
}

export default App;
