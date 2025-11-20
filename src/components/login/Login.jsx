import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useAuth } from '../authWrapper/AuthContext';
import { useNavigate } from 'react-router';

function Login() {
  const {login} = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData]=useState({
    username: '',
    password: ''
  });
  const onSubmit=(e)=>{
    e.preventDefault();
    //console.log("User Data:", userData);
    login(userData.username);
    navigate('/');
  
  }
  return (
     <div>
    <Header/>
    <form className='h-screen flex flex-col max-w-100 gap-4 m-12' onSubmit={onSubmit}>
   <input
   minLength={3}
   placeholder='Username'
   className="border rounded"
    value={userData.username} 
    onChange={(e) => setUserData({...userData, username: e.target.value})}/>
   <input 
   minLength={3}
   placeholder='Password'
   type="password"
   className='border rounded '
   value={userData.password} 
   onChange={(e) => setUserData({...userData, password: e.target.value})}/>
    <button type="submit" className='bg-green-700 rounded text-white'> Login</button>
    </form>
    <Footer/>
    </div>
  )
}

export default Login