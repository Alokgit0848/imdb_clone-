import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className=" m-3 h-[60vh] w-[260px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 mx-[14rem] flex flex-col justify-center h-5 w-5 item-center rounded-full bg-gray-900  "
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 mx-[14rem] flex flex-col justify-center h-5 w-5 item-center rounded-full bg-gray-900  "
        >
          &#128525;
        </div>
      )}

      <div className="flex flex-col justify-end  text-white text-center font-bold bg-gray-900 opacity-60 p-2 rounded-b-md my-[21rem] ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
