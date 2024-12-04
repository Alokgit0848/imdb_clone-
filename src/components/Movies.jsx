import MovieCard from './MovieCard'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchlist, handleRemoveFromWatchList, watchlist}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if(pageNo == 1){
      setPageNo(pageNo)
     }
    else{
      setPageNo(pageNo-1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo+1)
  }


  useEffect( ()=> {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3cff30444cb2a61063ac6f011b458181&language=en-US&page=${pageNo}`).then(function(res) {
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  }, [pageNo])


  return (
    <div className='p-3 m-3'>
        <div className='text-center text-2xl font-bold'>
        Tranding Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around m-4'>
          {movies.map((movieObj) =>{
            return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
          })}
        </div>

        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div> 
  )
}

export default Movies