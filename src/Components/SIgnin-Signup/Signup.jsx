import React from 'react'
import './CSS/Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <>
    {/* THIS IS THE START OF THE LOGIN FORM */}
    <div className="signup-container">
            <div className="signup-image">
              <img src="./signup-page.png" alt="Sign Up" />
            </div>
            <div className="signup-form">
                <h2>Sign Up Page</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.id" />
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="tel" placeholder="+977 9800000000"/>
                    </div>
                    <button type="submit" className="signup-button">Get started</button>
                </form>
                <div className="separator">
                  <div className="separator-line">
                    <div className="separator-border"></div>
                  </div>
                  <div className="separator-text">
                    <span className="separator-span">or</span>
                  </div>
                </div>

                <div className="social-login">
                    <button className="google-login" ><p><i className="fa-brands fa-google"></i> Google</p></button>
                    <button className="linkedin-login"><p><i className="fa-brands fa-linkedin"></i> LinkedIn</p></button>
                </div>
                <p className='signin-option'>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </div>
    {/* THIS IS THE END OF THE LOGIN FORM */}
    </>
  );
}

export default Signup
