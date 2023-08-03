import { Link } from "react-router-dom"
import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { useTitle } from "../hooks/useTitle"


export const PageNotFound = () => {

  useTitle("Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 ,Oops!</p>
          <div className="max-w-xl">
          <img className="rounded" src={PageNotFoundImage} alt="Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center m-4">
          <Link to="/">
            <button className="w-64 text-xl rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">Back to MovieFlex</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
