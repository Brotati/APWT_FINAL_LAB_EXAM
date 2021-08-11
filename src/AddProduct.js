import React, { useState } from "react";
import Header from "./Header";
import { Form, Button } from "react-bootstrap";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  async function AddProduct() {
    const formdata = new FormData();
    setErrors("Data has been saved");
    formdata.append("file", file);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    let result = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formdata,
    });
    result = await result.json();
  }

  return (
    <div>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h2 style={{ color: "Green" }}>{errors}</h2>
        <br />
        <Form.Control
          size="sm"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          size="sm"
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <Form.Control
          size="sm"
          type="text"
          placeholder="Price($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <Form.Control
          as="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button variant="primary" type="submit" onClick={AddProduct}>
          Add Product
        </Button>
      </div>
    </div>
  );
}
