import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/MovieCard"

export const Search = ({apipath}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apipath,queryTerm);

  useTitle(`Search result for "${queryTerm}"`);


  return (
    <main>
    <section>
      <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No Result Found for "${queryTerm}"` : `${movies.length} - Result Found for "${queryTerm}"` }</p>
    </section>
    <section className="min-h-90vh max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
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
