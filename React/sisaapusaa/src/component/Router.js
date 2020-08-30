import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Nav from "../connect/Nav";
import ProductList from "../connect/ProductList";
import Details from "../connect/Details";
import Cart from "../connect/Cart";
import Default from '../connect/Default';
import Modal from "../component/Product/Modal";

const AppRouter = () => (
  <BrowserRouter>
  <Nav> </Nav>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/cart" component={Cart} />
      <Route  component={Default} />
     
    </Switch>
    <Modal/>
  </BrowserRouter>



);

export default AppRouter;