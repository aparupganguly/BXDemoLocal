import React from 'react'
import {Link} from "react-router-dom";
import "../Components/LoginPage.css"

const LoginPage = () => {
  return (
    <>
      <div className='Formpage'>
        <h1 className="header-Text">BountyX</h1>
        <div className="login-container">
          <p className='Header'>Login for the Best Experience</p>
          <div className="LoginInput">
            <input className="inputbox" type="email" placeholder="Email" required />
            <input className="inputbox" type="password" placeholder="Password" required />
            <p className='altoption'>Dont have an Account?  
              <Link to ="/">
                <span className='gotosignup'>  SIGN UP</span>
              </Link>
            </p>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default LoginPage