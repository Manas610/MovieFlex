import { Routes , Route } from "react-router-dom";
import { MovieDetail , MovieList , PageNotFound , Search } from "../pages/index";

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<MovieList apipath="movie/now_playing" title="Home" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList apipath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apipath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apipath="movie/upcoming" title="Upcoming" />} />
        <Route path="search" element={<Search apipath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
