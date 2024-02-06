import React, {useEffect, useState} from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 


const SignUp=()=>{
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Gender,setGender]=useState("");
    const[Contact,setContact]=useState("");
    const[Password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=> {
        const auth = localStorage.getItem("user");
        if (auth){
            navigate('/')
        }
    },[])
    const collectData=async ()=>{
        console.warn(Name,Email,Gender,Contact,Password);
        let result = await fetch("http://localhost:5000/register",{
            method:'post',
            body: JSON.stringify({Name,Email,Gender,Contact,Password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result))
        navigate("/")
    }
    return(
        <div className="register"> 
            <h1>Register</h1>
            <input className="inputbox" type="text" placeholder="Enter Name" 
            value={Name} onChange={(e)=>setName(e.target.value)}
            />
            <input className="inputbox" type="text" placeholder="Enter Email" 
            value={Email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputbox" type="text" placeholder="Gender" 
            value={Gender} onChange={(e)=>setGender(e.target.value)}
            />
            <input className="inputbox" type="number" placeholder="Enter Contact Details" 
            value={Contact} onChange={(e)=>setContact(e.target.value)}
            />
            <input className="inputbox" type="password" placeholder="Enter Password" 
            value={Password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
        
    )
}
export default SignUp