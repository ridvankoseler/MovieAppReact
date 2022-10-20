import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext"
import { toastWarnNotify } from '../helpers/ToastNotify';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({poster_path,title,overview,vote_average,id}) => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const setVoteClass = (vote)=>{
    if(vote>8){
      return "green"
    }else if(vote>=6){
      return "orange"
    }else {
      return "red"
    }
  }
  return (
    <div onClick={()=>{navigate("/details/"+id) 
    !currentUser && toastWarnNotify("Please log in to search a movie")}} className='movie d-flex justify-content-center flex-column m-2 '>
        <img className='imgDiv m-auto rounded-4yarn ' src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
        <div className='movie-title text-center d-flex justify-content-between px-4 p-1 m-auto  align-items-center px-1'>
            <h5 className='mt-1 text-center '>{title}</h5>
            {currentUser && (<span className= {`p-2 tag ${setVoteClass(vote_average)}`}>{vote_average}</span>) }
        </div>
        <div className='movie-over text-center m-auto'>
          <h2>Overview</h2>
          <p className=''>{overview}</p>
        </div>
    </div>
  )
}

export default MovieCard