import { useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

export default function MovieContextWrapper({children}) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    let updatedWatchList = [...watchList, movieObj]
    setWatchList(updatedWatchList);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  }

  const removeFromWatchList = (movieObj) => {
    let filteredMovies = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    })
    setWatchList(filteredMovies);
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("watchList");

    if (!moviesFromLocalStorage) {
      return;
    }

    setWatchList(JSON.parse(moviesFromLocalStorage));
    console.log(JSON.parse(moviesFromLocalStorage)); 
  }, []);


  return (
    <MovieContext.Provider value={{watchList, addToWatchList, removeFromWatchList,setWatchList}}>
      {children}
    </MovieContext.Provider>
  );
}