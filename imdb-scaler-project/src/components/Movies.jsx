//content area

import { useState,useEffect } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import axios from "axios";
import WatchList from './watchlist';

const Movies = () => {
    const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 5",
    },
    {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: "Movie 6",
        },

        {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: "Movie 7",
        },

        {
        url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        title: "Movie 8",
    }
  ])

  const [watchlist,setWatchList] = useState([]);


  const [pageNo, setPageNo] = useState(1);


  const handleNext = () => {
    setPageNo(pageNo + 1);
  }

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  }

  const addToWatchList = (movieObj) => {
    let updatedWatchList = [...watchlist,movieObj]
    setWatchList(updatedWatchList);
  }

  const removeFromWatchList =(movieObj) =>{
    let filteredMovies = watchlist.filter((movies)=>{
      return movie.id !== movieObj.id;
    })
    setWatchList(filteredMovies);
  }
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);



  return ( 
    <div className='min-h-screen '>
        <div className='text-2xl font-bold text-center m-5 '>Trending Movies</div>

          
        <div className='flex justify-evenly gap-8 flex-wrap'>
        {movies.map((movie,i) => {
            return (
                <MovieCard key={i} movieObj={movie} />
            );
        })}
        </div>
        {
        <Pagination nextPageFn={handleNext} prevPageFn={handlePrev} pageNumber={pageNo} />
        }
    </div>
  )
}

export default Movies;