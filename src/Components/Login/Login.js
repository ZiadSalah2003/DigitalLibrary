import React from 'react'
import './Login.css';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Login = () => {
  return (
    
      <div className='wrapper'>
        <div className='library-text'>
        <p>Digital Library</p>
      </div>
<form action="">
<h1>Login</h1>
<div className="input-box">
<input type="email" placeholder='Email' required />
<MdEmail className='icon'/>
</div>
<div className="input-box">
<input type="password" placeholder='Password' required />
<FaLock className='icon'/>
</div>
<div className="remeber-forgot">
<label><input type='checkbox'/>Remember me</label>
</div>
<button type="submit">Login</button>
<div className="register-link">
<p>Don't Have an Account?<a href="#">Register</a></p>

    </div>
  </form>
</div>
  );
};

export default Login;