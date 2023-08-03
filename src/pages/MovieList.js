import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard"

export const MovieList = ({apipath , title}) => {

  const { data: movies } = useFetch(apipath);

  useTitle(`${title}`);

  return (
    <main>
      <section className="min-h-90vh max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {
          movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          ))
        }
        </div>
      </section>
    </main>
  )
}
