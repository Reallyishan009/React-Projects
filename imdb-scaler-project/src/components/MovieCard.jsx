const MovieCard = ({ movieObj }) => {
  return (
    <div
      className={`h-72 rounded-lg w-48 bg-center justify-between flex-col bg-cover bg-[url(${movieObj.url})] flex items-end hover:scale-110 duration-300`}
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}
    >
      <div className="justify-center m-2 text-xl bg-gray-700 rounded-2xl hover:cursor-pointer items-center">
        ❤️
      </div>

      <div className="justify-center m-2 text-xl bg-gray-700 rounded-2xl hover:cursor-pointer items-center">
        🤍
      </div>
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900">
        {movieObj.title}
      </div>
    </div>
  );
};

export default MovieCard;
