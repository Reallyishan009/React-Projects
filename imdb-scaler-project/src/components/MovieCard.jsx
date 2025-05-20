import React from "react";

function MovieCard({ movieObj }) {
  return (
    // add the background image url
    <div className={`h-72 w-48 bg-center bg-cover rounded-lg bg-[url(${movieObj.url})] flex items-end hover:scale-110 dura
    tion-300 transition-all`}>
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900/70">
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;