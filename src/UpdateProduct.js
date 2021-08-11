import React from "react";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function UpdateProduct(props) {
  console.warn("props", props.match.params.id);
  const [data, setData] = useState([]);
  //const [errors,setErrors] = useState("");
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  }, []);

  return (
    <div>
      <Header />
      <h1>Update product</h1>
      <div className="col-sm-6 offset-sm-3">
        <Form.Control
          size="sm"
          type="text"
          placeholder="Name"
          className="form-control"
          defaultValue={data.name}
        />
        <br />
        <img
          src={"http://localhost:8000/" + data.file_path}
          style={{ width: 150 }}
        />
        <br />
        <Form.Control
          size="sm"
          type="file"
          className="form-control"
          defaultValue={data.file_path}
        />

        <br />
        <Form.Control
          size="sm"
          type="text"
          placeholder="Price($)"
          defaultValue={data.price}
        />
        <br />
        <Form.Control
          as="textarea"
          size="sm"
          placeholder="Description"
          defaultValue={data.description}
        />
        <br />
        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </div>
    </div>
  );
}
export default withRouter(UpdateProduct);
