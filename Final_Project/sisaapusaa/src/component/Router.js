import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Nav from "../views/Nav";
import ProductList from "../views/ProductList";
import Details from "../views/Details";
import Cart from "../views/Cart";
import Default from '../views/Default';
import SignUp from '../views/SignUP';
import Login from '../views/Login';
import UploadProduct from "../views/UploadProduct/uploadProduct";
import Modal from "../component/Product/Modal";

const AppRouter = () => (
  <BrowserRouter>
  <Nav> </Nav>
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/product/upload" component={UploadProduct} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/cart" component={Cart} />
      <Route  component={Default} />
     
    </Switch>
    <Modal/>
  </BrowserRouter>



);

export default AppRouter;