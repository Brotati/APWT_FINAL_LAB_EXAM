import React from "react";
//import {Button} from 'react-bootstrap';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Protected from "./Protected";
import Login from "./Login";
import Reg from "./Reg";
import UpdateProduct from "./UpdateProduct";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import DeleteProduct from "./DeleteProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/delete">
            <Protected Cmp={DeleteProduct} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Reg />
          </Route>
          <Route path="/ProductList">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
