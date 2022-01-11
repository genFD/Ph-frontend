import React from 'react';
import '../loginPage/loginPage.css';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='login-container'>
      <div className='form-container'>
        <h1>Please register</h1>
        <form>
          <div className='form-control'>
            <input type='text' required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>N</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>m</span>
              <span style={{ transitionDelay: '150ms' }}>e</span>
            </label>
          </div>

          <div className='form-control'>
            <input type='text' required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>E</span>
              <span style={{ transitionDelay: '50ms' }}>m</span>
              <span style={{ transitionDelay: '100ms' }}>a</span>
              <span style={{ transitionDelay: '150ms' }}>i</span>
              <span style={{ transitionDelay: '200ms' }}>l</span>
            </label>
          </div>

          <div className='form-control'>
            <input type='password' required />
            <label>
              <span style={{ transitionDelay: '0ms' }}>P</span>
              <span style={{ transitionDelay: '50ms' }}>a</span>
              <span style={{ transitionDelay: '100ms' }}>s</span>
              <span style={{ transitionDelay: '150ms' }}>s</span>
              <span style={{ transitionDelay: '200ms' }}>w</span>
              <span style={{ transitionDelay: '250ms' }}>o</span>
              <span style={{ transitionDelay: '300ms' }}>r</span>
              <span style={{ transitionDelay: '350ms' }}>d</span>
            </label>
          </div>
          <div className='btn-container'>
            <button className='btn'>Register</button>
          </div>
          <p className='text'>
            Already a member?
            <Link to='/login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
