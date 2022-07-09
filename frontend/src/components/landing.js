import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";



const Landing = () => {
  const udetails = useSelector((state) => state.COMB.udetails)
  const { loginWithRedirect, user } = useAuth0()
  return (
    <div className="text-center hero">
    <img 
    className="mb-3 app-logo" 
    src={require("../public/1/mylogo.png")} 
    alt="React logo" 
    width="200" 
    height={"200"}
    />
    <h1 className="mb-4" style={{color: "#581D11", fontStyle: "italic"}}>Welcome to NeMes1s Bug Tracker App...</h1>
    <hr style={{marginBottom: "2rem", marginTop: "2rem"}}/>
    {user && udetails.fname ?    
    <Button variant="success" size="lg">Proceed to App</Button>
    :
    <p className="lead">
      Please Login to continue{" "}
      <Button variant="outline-success" size="lg" style={{padding: 0, width: "5rem"}}  onClick={() => {loginWithRedirect()}}>Login</Button>
    </p>
    }
  </div>
  ) 
  
};

export default Landing;
