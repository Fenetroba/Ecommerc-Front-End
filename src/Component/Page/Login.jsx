import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaKeybase } from "react-icons/fa";
import "./page Style/login.css";
import slieder3 from "../Asset/model-24481_640.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const usenav = useNavigate();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const redirectSignUp=()=>{
    usenav("/SignUp");
  }

  const LoginHandler = async () => {
    let result=await fetch("http://localhost:5000/login",{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        "content-Type":"application/json"
      }
    });
    result=await result.json();
    console.log(result)
    usenav("/");
  };
  return (
    <div className="login__contener">
      <h1>LOGIN</h1>
      <div className="login__central">
        <div className="loginForm">
          <input type="text" placeholder="Email Addres" value={email} onChange={(e)=>setemail(e.target.value)}  />

          <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
          <button onClick={LoginHandler}>LOGIN NOW</button>

          <h2>Login With Other</h2>

          <span>
            <FaGoogle /> Login with Google
          </span>

          <span>
            <FaFacebook /> Login with FaceBook
          </span>
        </div>
        <div className="login__sider">
          <h3 className="signUp_page" onClick={redirectSignUp}>
            Sign Up
          </h3>
          <img src={slieder3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
