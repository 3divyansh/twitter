import React, { useState } from "react";
import Logo from "../img/twitter-logo.avif";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actionTypes.js";


const Login = () => {
  
  
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
   const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };
  


  const submitHandler = async (e) => {

    e.preventDefault();
    setError(null);
    try {
      if (isLogin) {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          withCredentials: true
        });
        dispatch(getUser(res?.data?.user));

        toast.success("Login successful!");
       navigate("/")
        console.log(res);
        
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    
    try {
      if (!isLogin) {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, email, username, password }, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          withCredentials: true
        });
        toast.success("Registration successful!");
        navigate("/")
        console.log(res);
       
      }
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
  
    
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    
  };


  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };


  function toastes(){
    console.log("login")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className='flex items-center justify-evenly w-["80%"]'>
        <div>
          <img
            className="ml-1 mr-36"
            width={"500px"}
            src={Logo}
            alt="Twitter Logo"
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happening now</h1>
          </div>
          <h1 className="mt-2 mb-2 text-2xl font-bold">{isLogin ? "Log in" : "Create an account"}</h1>
          <form onSubmit={submitHandler} className='flex flex-col w-["50%"] gap-2'>
            {
              !isLogin && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="outline-blue-400 border border-gray-800 px-3 py-2 rounded-full font-semibold w-80"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className="outline-blue-400 border border-gray-800 px-3 py-2 rounded-full font-semibold w-80"
                  />
                </>
              )
            }
                  <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xyz1@gmail.com"
              className="outline-blue-400 border border-gray-800 px-3 py-2 rounded-full font-semibold w-80"
            />
      
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-blue-400 border border-gray-800 px-3 py-2 rounded-full font-semibold w-80"
            />
            <button onClick={(submitHandler&& toastes) || changeHandler
                 
            }  className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white w-80">
              {isLogin ? "Sign in" : "Sign up"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <h1>
              {isLogin ? "Do not have an account? " : "Already have an account?"} <span onClick={loginSignupHandler} className="font-bold text-blue-600 cursor-pointer">{isLogin ? "Register" : " Login"}</span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;