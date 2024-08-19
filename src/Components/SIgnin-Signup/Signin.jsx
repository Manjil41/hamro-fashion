import React from 'react'
import './CSS/Signin.css'
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>

    {/* THIS IS THE START OF THE LOGIN FORM */}
    <div className="signup-container">
            <div className="signup-image">
              <img src="./login-page.png" alt="Login" />
            </div>
            <div className="signup-form">
                <h2>Login Page</h2>
                <form>
                    <div className="form-group">
                        <label>Email or Phone number</label>
                        <input type="text" placeholder="Enter your Email or Phone" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" placeholder="Enter your Password" />
                        
                    </div>
                    <a className='for-pass' href="/">Forgot your password</a>
                    <button type="submit" className="signup-button">Get started</button>
                </form>
                <p className='border-line'>or sign up with</p>
                <div className="social-login">
                    <button className="btn google-login" ><p><i class="fa-brands fa-google"></i> Google</p></button>
                    <button className="btn linkedin-login"><p><i class="fa-brands fa-linkedin"></i> LinkedIn</p></button>
                </div>
                <p className='signin-option'>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
        </div>
    {/* THIS IS THE END OF THE LOGIN FORM */}
    </>
  );
}

export default Signin
