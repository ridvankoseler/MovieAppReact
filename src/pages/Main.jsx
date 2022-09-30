import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const Main = () => {
  const [movies, setMovies] = useState([]);
  //
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState()
  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true)
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false))
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (searchTerm && currentUser){
      getMovies(SEARCH_API + searchTerm);
    } else if(!currentUser){
      alert("Please log in to search a movie")
    }else{
      alert("Please enter a text")
    }
  }
  return (
    <div className='text-center'>
      <form
        className='search bg-secondary d-flex justify-content-center align-items-center '
        onSubmit={handleSubmit}
      >
        <input
          type='search'
          className='search-input m-1 rounded-3 px-lg-5 '
          placeholder='Search a movie...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type='submit'
          className='buttonDiv p-1 m-0 rounded-3 btn btn-danger'
        >
          Search
        </button>
      </form>

      <div className='d-flex flex-wrap justify-content-center '>
        {loading ? (
          <div class='spinner-border text-secondary' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        ) : (
          movies?.map((movie) => {
             return(
            <div className="col-sm-6 col-md-5 col-lg-3">
              <MovieCard key={movie.id} {...movie} />
            </div>
            )
          }
         
          )
          
        )}
      </div>
    </div>
  );
};

export default Main;
