import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`
    //burada display name bizim user bilgimizin içinde null olarak 
    console.log(firstName ,lastName, email,password)
    createUser(email, password ,navigate ,displayName);
    //?navigate i burda giriş yapıldığında menüye gitmek için kullanıyoruz ancak hata alsak bile menüye gidior biz ise sadece hata almadığımızda gitmek istediğimiz için onu parametre olarak göderiyoruz firebase ye firebase try catch bloğunun içinde kullanıyoruz.
    // navigate('/')
  }
  return (
    <div className='registerDiv p-4  d-flex justify-content-between'>
      <div className='imgDiv d-none d-lg-block'>
        <img src={"https://picsum.photos/600/600"} alt='picsum' />
      </div>
      <div className='m-auto mt-3 col-lg-5 col-10'>
        <h2 className='text-center text-danger display-2 fw-bold'>Register</h2>
        <form onSubmit={handleSubmit} className='' action=''>
          <div className='mt-2 d-flex flex-column '>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              First Name
            </label>
            <input
              className='mt-2 fs-3  '
              placeholder='Please your first name...'
              type='text'
              required
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className='d-flex flex-column'>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              Last Name
            </label>
            <input
              className='mt-2 fs-3'
              placeholder='Please your last name...'
              type='text'
              required
              onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className='d-flex flex-column'>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              Email
            </label>
            <input
              className='mt-2 fs-3'
              placeholder='Please Your email adress'
              type='email'
              required
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <input
            className='mt-4 d-flex justify-content-center m-auto mt-2 btn btn-danger'
            type='submit'
            value="Register"
          />
            
          
        </form>
      </div>
    </div>
  );
};

export default Register;
