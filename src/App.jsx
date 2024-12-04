import Nav from "./components/Nav";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import "./App.css";

import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };


  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredWatchlist);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))


  };

  useEffect( () => {
    let movieFromLocalStorage = localStorage.getItem('moviesApp')
    if(!movieFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(movieFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />{" "}
              </>
            }
          />

          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
