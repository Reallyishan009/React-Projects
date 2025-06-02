import axios from "axios";
import { useEffect, useState } from "react";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68");
  const [title, setTitle] = useState("Placeholder Movie");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1"
      )
      .then(function (res) {
        const movie = res.data.results[0];
        setBannerImage(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
        setTitle(movie.original_title);
      })
      .catch((err) => {
        console.log(err);
      })
  });

  return (
    <div
      className={`h-[60vh] w-[100vw] bg-cover bg-center flex items-end`}
      style={{backgroundImage:`url(${bannerImage})`}}
    >
      <div className="text-white text-4xl w-full text-center pb-3">{title}</div>
    </div>
  );
};

export default Banner;