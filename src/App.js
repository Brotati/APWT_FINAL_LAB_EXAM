import React from 'react';
//import {Button} from 'react-bootstrap';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'


import Header from './Header'
import Login from './Login'
import Reg from './Reg'
import EditProduct from './EditProduct'
import AddProduct  from './AddProduct'

 
function App(){
    
          return <div className="App">
             <BrowserRouter>     
             <Header />
            <h1 > Onling Shooping</h1>
            <Route path="/add">
             <AddProduct />
            </Route>
            <Route path="/edit">
             <EditProduct />
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