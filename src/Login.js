import Header from './Header'
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
          history.push("./add");
        }
      }, []);
    
    return( 
        <div>
           
            <Header />
            loginpage
        </div>
        
    )
}
export default Login;