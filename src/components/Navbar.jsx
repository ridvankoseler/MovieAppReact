import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  //context deki currentUseri alıp burada kullanabiliriz.


  //?Burada CustomHooklu kısmı yapıcaz ama kullanmıcaz.
  // const {currentUser} = useAuthContext()
  
  // const currentUser={displayName:'Rıdvan Köseler'}
  // const currentUser = false;
  return (
    <div className='p-3 bg-primary d-flex justify-content-between'>
      <div className='mt-1'>
        <Link className='text-white text-decoration-none' to='/'>
          Movie App
        </Link>
      </div>
      <div>
        <nav className='d-flex '>
          {currentUser ? (
            <>
              <h5 className='me-4 mt-2'>{currentUser.displayName}</h5>
              <button onClick={()=>logOut()} className='me-2 text-white btn btn-outline-secondary'>
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className='me-2 text-white btn btn-outline-secondary'
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className='me-2 text-white btn btn-outline-secondary'
              >
                Register
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
