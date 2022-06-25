import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase";
import { async } from '@firebase/util';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const auth = getAuth();
   
    const register = async (e) => {
      e.preventDefault();
      try{

        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password )
          console.log(auth);
          console.log(user);
         
        } catch (error){
          console.log(error.message);
        }
      
      
    }
  
   
    const signIn =async(e)=>{
        e.preventDefault();
        try{

          const user = await signInWithEmailAndPassword(
            auth,
            email,
            password )
            if (auth){
              history('/')
            }
            
            console.log(user);
          } catch (error){
            console.log(error.message);
            alert(error.message);
          }
    }
       
    
  return (
    <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' 
                    onClick={(e)=>signIn(e)}
                    
                     className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                 
                 className='login__registerButton' onClick={(e)=>register(e)}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
