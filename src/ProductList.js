import React, { useEffect, useState } from "react";
import Hedar from "./Header";
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function ProductList() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect( () => {
       getData()
  }, []);
  async function deleteproduct(id){
    setErrors("Product deleted!");
     let result = await fetch("http://localhost:8000/api/delete/"+id,{
       method: 'DELETE'
     });
     result = await result.json();
     console.warn(result)
     getData()
     
  }
   async function getData(){
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
   }
  return (
    <div>
      <Hedar />
      <div className="col-sm-8 offset-sm-2">
      <h1>ProductList</h1>
      <h2 style={{ color: "Green" }}>{errors}</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th colSpan="2">Action</th> 
          </tr>
          </thead> 
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td><img style={{ width:"100px" }} src={"http://localhost:8000/"+item.file_path} /></td> 
              <td><Link to={"update/"+item.id}><span className="update">Update</span></Link></td>
              <td><span onClick={()=>{deleteproduct(item.id)}} className="delete">Delete</span></td> 
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}
