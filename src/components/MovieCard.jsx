import React, { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({poster_path,title,overview,vote_average,id}) => {
  const {currentUser} = useContext(AuthContext)
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
    <div className='movieCard border border-2 border-danger d-flex justify-content-center'>
        <img className='imgDiv' src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
        <div>
            <h5>{title}</h5>
            {currentUser && (<span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>) }
        </div>
        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
    </div>
  )
}

export default MovieCard