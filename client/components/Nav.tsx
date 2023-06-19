import { Link } from "react-router-dom";
// import { getBooks } from "../apis/books";
// import { useQuery } from "react-query";

export default function Nav() {
  // const { isLoading, data } = useQuery('getReviewsByBookId', async () => {
  //   return await getBooks();
  // })
  return (
    <div className="navbar">
      <div>
        <Link to={`/`} className="navbar-link">Home</Link>
      </div>
      <div>
        <Link to={`books/shelf`} className="navbar-link">Book Shelf</Link>
      </div>
      <div>
        <Link to={`books/add`} className="navbar-link">Add Book</Link>
      </div>
      <div>
        <Link to={`books/favourites`} className="navbar-link">Favourites</Link>
      </div>

    </div>
  )
}