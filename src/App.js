import React from 'react';
//import {Button} from 'react-bootstrap';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'


import Protected from './Protected'
import Login from './Login'
import Reg from './Reg'
import UpdateProduct from './UpdateProduct'
import AddProduct  from './AddProduct'


 
function App(){
    
          return <div className="App">
             <BrowserRouter>     
            <Route path="/add">
             <Protected Cmp={AddProduct} />
            </Route>
            <Route path="/update">
             <Protected Cmp={UpdateProduct} />
            </Route>
            <Route path="/login">
            <Login />
            </Route>
            <Route path="/register">
             <Reg />
            </Route>
            </BrowserRouter>
        </div>;
}
export default App;