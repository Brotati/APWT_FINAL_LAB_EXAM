import React, { useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";

export default function SearchProduct() {
  const [data, setData] = useState([]);

  async function search(key) {
    if (key.length > 1) {
      let result = await fetch("http://localhost:8000/api/search/" + key);
      result = await result.json();
      setData(result);
    }
  }
  return (
    <div>
      <Header />
      <h1>Search Products</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          className="form-control"
          onChange={(e) => search(e.target.value)}
          type="text"
          placeholder="Search Product"
        />
        <br />
        {data.length > 0 ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      style={{ width: "100px" }}
                      src={"http://localhost:8000/" + item.file_path}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}
