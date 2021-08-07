import Header from './Header'
import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login(){
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
          history.push("/add")
        }
      }, []);
      async function login(){
          
          let item={email,password};
          let result = await fetch("http://localhost:8000/api/login",{
             method:'POST',
             headers:{
                 "Content-Type":"application/json",
                 "Accept":"application/json"
             },
             body:JSON.stringify(item)
          });
          result= await result.json();
          localStorage.setItem("user-info", JSON.stringify(result));
          history.push("/add")
      }
    
    return( 
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
        <h1>User Login</h1>
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
        <Button variant="primary" type="submit" onClick={login}>
          Login
        </Button>
      </div>
      </div>

        
    )
}
export default Login;