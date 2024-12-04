import React, { useEffect, useState } from "react";
import genreids from '../Utility/genre'

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {

  const [search, setSearch] = useState('')
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

 let handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  let sortInc = () =>{
    let sortedInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedInc])

  }

  let sortDec = () => {
    let sortedDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDec])

  }

  useEffect(() => {
    let temp = watchlist.map((MovieObj) => {
      return genreids[MovieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  },[watchlist ])


  return (
    <>
      <div className="flex justify-center flex0wrap m-4 gap-2">
        {genreList.map((genre) => {
          return <div onClick={() => handleFilter(genre)} className={ currGenre==genre? "flex justify-center h-[2rem] w-[6rem] rounded-md text-white font-bold item-center bg-blue-300 ":'flex justify-center h-[2rem] w-[6rem] rounded-md text-white font-bold item-center bg-gray-300' }>
            {genre}
          </div>
        })}
      </div>

      <div className="flex justify-center my-4">
        <input onChange={handleSearch} value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 "
          placeholder="Search Movies"
          type="text"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div onClick={sortInc} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDec} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((MovieObj) => {
              if(currGenre == 'All Genres'){
                return true
              }else{
                return genreids[MovieObj.genre_ids[0]]==currGenre;
              }
            }).filter((MovieObj) => {
              return MovieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((MovieObj) => {
              return (
                <tr className="border-b-2">
                  <td className="flex item-center px-3 py-3">
                    <img
                      className="h-[5rem] w-[8rem]"
                      src={`https://image.tmdb.org/t/p/original/${MovieObj.backdrop_path}`}
                      alt=""
                    />
                    <div className="mx-10 my-7">{MovieObj.original_title}</div>
                  </td>

                  <td>{MovieObj.vote_average}</td>
                  <td>{MovieObj.popularity}</td>
                  <td>{genreids[MovieObj.genre_ids[0]]}</td>

                  <td onClick={() => handleRemoveFromWatchList(MovieObj)} className="text-red-500 font-bold cursor-pointer">Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
