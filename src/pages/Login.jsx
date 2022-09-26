import React, { useState } from "react";
import { signIn, signUpProvider } from "../auth/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email,password,navigate)
  };

  const handleProviderLogin =()=>{
    signUpProvider(navigate)
  }
  return (
    <div className='registerDiv p-4  d-flex justify-content-between'>
      <div className='imgDiv d-none d-lg-block'>
        <img src={"https://picsum.photos/600/600"} alt='picsum' />
      </div>
      <div className='m-auto mt-3 col-lg-5 col-10'>
        <h2 className='text-center text-danger display-2 fw-bold'>Login</h2>
        <form onSubmit={handleLogin} className='' action=''>
          <div className='d-flex flex-column'>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              Email
            </label>
            <input
              className='mt-2 fs-3'
              placeholder='Please Your email adress'
              type='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='d-flex flex-column'>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              Password
            </label>
            <input
              className='mt-2 fs-3'
              placeholder='Please your password'
              type='password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mt-4'>
            <h5 className='text-primary'>Forgot password?</h5>
          </div>
          <input
            className='mt-4 d-flex justify-content-center m-auto mt-2 btn btn-danger'
            type='submit'
            value='Login'
          />
        </form>
        <div className="text-center">
          <button className='btn btn-danger mt-4' onClick={handleProviderLogin}>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
