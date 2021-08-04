import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signUp() {
    let item = { name, email, password }

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.warn("result", result);
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User SignUp</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="name@example.com"
        className="mb-3"
      >
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FloatingLabel>
      <br />
      <Button variant="primary" type="submit" onClick={signUp}>
        Submit
      </Button>
    </div>
  );
}
