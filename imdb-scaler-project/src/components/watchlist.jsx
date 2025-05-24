import React, { use, useEffect, useState } from "react";
import genreids from "../assets/genre"; // Importing genre ids from a JSON file
const WatchList = () => {

  const [watchlist, setWatchList] = useState([]);

  const [search,setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All");

  const handleFilter = (genre) => {
    setCurrGenre(genre);  
    
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleascendingRatings = () => {
    const sortedAscending = watchlist.sort((a, b) => { return a.vote_average - b.vote_average});
    setWatchList([...sortedAscending]); //shallowing the component to re-render with the sorted list
  };
  const handledescendingRatings = () => {
    const sortedDescending = watchlist.sort((a, b) => { return b.vote_average - a.vote_average});
    setWatchList([...sortedDescending]); //shallowing the component to re-render with the sorted list
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("watchList");

    if (!moviesFromLocalStorage) {
      return;
    }

    const parsedWatchList = JSON.parse(moviesFromLocalStorage);

    setWatchList(parsedWatchList);
    
  }, []);


  useEffect(() => {
    let genres = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    })
    genres = new Set(genres); // to get unique genre ids  
    setGenreList(["All",...genres]); // converting set to array
  }, [watchlist]);


  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {}
      <div className="flex  justify-center my-10 ">
        <input 
        type="text" 
        placeholder=" Search Movies" 
        value={search} 
        onChange={handleSearch} 
        className="border border-gray-500 h-[3rem] w-[18rem]"
        />
      </div>

      { /*genre filter*/}
       <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl cursor-pointer"
                  : "mx-4 flex justify-center items-center bg-gray-400 h-[3rem] w-[9rem] text-white border rounded-xl cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
    

      {/*watchlist table*/}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex items-center gap-2">
                <i onClick={handleascendingRatings} className="fa-solid fa-arrow-up cursor-pointer"></i>
               
                <div>Ratings</div>

                 <i onClick={handledescendingRatings} className="fa-solid fa-arrow-down cursor-pointer"></i>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchlist
            .filter((movie) => {
              if (currGenre === "All"){
                return true; // If "All" is selected, show all movies   
              } { 
                return movie.genre_ids[0] === currGenre; // Filter by selected genre
              }
            })
            .filter((movie) => { 
              return movie.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movieObj) => ( 
              <tr key={movieObj.id} className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w-[10rem] object-fit"
                  src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                  alt="movie poster"
                />
                <div className="font-medium text-gray-700 text-sm">
                  {movieObj.title}
                </div>
              </td>
              <td className="pl-6 py-4">{movieObj.vote_average}</td>
              <td className="pl-6 py-4">{movieObj.popularity}</td>
              <td className="pl-2 py-4">{ genreids[movieObj.genre_ids[0]]}</td>
            </tr>

            ))}
            
          
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
