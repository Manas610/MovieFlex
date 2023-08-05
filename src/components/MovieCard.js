import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png"

export const MovieCard = ({movie}) => {

  const {id , title , overview , poster_path} = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  return (
    <div className="flex items-stretch">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <Link to={`/movie/${id}`}>
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${id}`}>
            <h5 className="inline-block	 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
