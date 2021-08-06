import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
//import FloatingLabel from "react-bootstrap-floating-label";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("./add");
    }
  }, []);
  async function signUp() {
    

    let item = { name, password, email };
    console.log(item);
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>User SignUp</h1>
        <input
          type="text"
          value={name}
          placeholder="Full name"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="name@example.com"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <Button variant="primary" type="submit" onClick={signUp}>
          Submit
        </Button>
      </div>
    </>
  );
}
