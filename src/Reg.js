import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";


export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [errors,setErrors] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/login")
     
    }
  }, []);
  async function signUp() {
    

    let item = { name, password, email };
    setErrors('Registration Successful')
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/login")
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Signup</h1>
        <h2 style={{ color: "Green" }}>{errors}</h2>
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
