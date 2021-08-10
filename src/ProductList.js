import React, { useEffect, useState } from "react";
import Hedar from "./Header";
import { Table } from "react-bootstrap";

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("data", data);
  return (
    <div>
      <Hedar />
      <div className="col-sm-8 offset-sm-2">
      <h1>ProductList</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img style={{ width:"100px" }} src={"http://localhost:8000/"+item.file_path} /></td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}
