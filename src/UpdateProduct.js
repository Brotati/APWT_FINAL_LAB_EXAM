import React from "react";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function UpdateProduct(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
    setName(result.name);
    setPrice(result.price);
    setDescription(result.description);
    setFile(result.file);
  }, []);
  async function editproduct(id) {
    const formdata = new FormData();
    setErrors("Product Updated!");
    formdata.append("file", file);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formdata,
      }
    );
    result= await result.json();
  }

  return (
    <div>
      <Header />
      <h1>Update product</h1>
      <div className="col-sm-6 offset-sm-3">
        <h2 style={{ color: "Green" }}>{errors}</h2>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Name"
          className="form-control"
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <img
          src={"http://localhost:8000/" + data.file_path}
          style={{ width: 150, padding: 8 }}
        />
        <br />
        <Form.Control
          size="sm"
          type="file"
          className="form-control"
          defaultValue={data.file_path}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br />
        <Form.Control
          size="sm"
          type="text"
          placeholder="Price($)"
          defaultValue={data.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <Form.Control
          as="textarea"
          size="sm"
          placeholder="Description"
          defaultValue={data.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button
          variant="primary"
          type="submit"
          onClick={() => editproduct(data.id)}
        >
          Update Product
        </Button>
      </div>
    </div>
  );
}
export default withRouter(UpdateProduct);
