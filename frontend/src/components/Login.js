import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(email, password)
    axios.post('http://localhost:9000/login',{ email,password }).then(res=>{
      console.log(res)
    })
  }
  return (
    <div>
       <div className='container m-3 justify-center' >
                <h1>Enter your username</h1>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>

                <h1>Enter your password</h1>
                <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn btn-primary' onClick={handleLogin} >Submit</button>
            </div>
            
    </div>
  )
}
