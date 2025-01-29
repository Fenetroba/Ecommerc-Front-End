import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaKeybase } from "react-icons/fa";
import "./page Style/login.css";
import slieder3 from "../Asset/model-24481_640.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
const usenav=useNavigate()
const [name,setname]=useState('')
const [password,setpassword]=useState('')
const [email,setemail]=useState('')

     const SigninHandler= async()=>{
       let result=await fetch("http://localhost:5000/signup",{
          method:"post",
          body:JSON.stringify({name,password,email}),
          headers:{
               "content-Type":"application/json"
          }
       })
       result= await result.json()
       console.log(result)
          usenav("/")
        }
  return (
    <div className="signup">
      <div className="signup_contener">
        <h1>SIGN UP</h1>
        <div className="login__central">
          <div className="loginForm">
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
            <input type="text" placeholder="Email Addres" value={email} onChange={(e)=>setemail(e.target.value)}  />

            <button onClick={SigninHandler}>Sign Up</button>
          </div>
          <div className="login__sider">
            <img src={slieder3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
