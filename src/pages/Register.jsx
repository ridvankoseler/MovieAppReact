import React from "react";

const Register = () => {
  return (
    <div className='registerDiv p-4  d-flex justify-content-between'>
      <div className='imgDiv d-none d-lg-block'>
        <img src={"https://picsum.photos/600/600"} alt='picsum' />
      </div>
      <div className='m-auto mt-3 col-lg-5 col-10'>
        <h2 className='text-center text-danger display-2 fw-bold'>Register</h2>
        <form className='' action=''>
          <div className='mt-2 d-flex flex-column '>
            <label className='mt-3 fw-bold fs-4' htmlFor=''>
              First Name
            </label>
            <input
              className='mt-2 fs-3  '
              placeholder='Please your first name...'
              type='text'
              required
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
