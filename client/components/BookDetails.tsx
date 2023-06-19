import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom"
import { getBooks, getReviewsByBookId } from "../apis/books";

export default function BookDetails() {
  const id = useParams().id
  const { isLoading, data } = useQuery('getBooks', async () => {
    return (await getBooks()).find((book) => book.id === Number(id));
  })

  const reviewQuery = useQuery('getReviewByBookId', async () => {
    return (await getReviewsByBookId(Number(id)))
  })



  return (
    <>
      {!isLoading && data &&
        <>
          <p className="detailTitle">Book Details</p>
          <div className="detailName">
            {data.name}
          </div>
          <div className="detailPage">
            <img src={data.picture} alt={data.name} />
          </div>
          <div className="reviews">
            <p style={{ fontSize: 28 }}>Reviews:</p>
            <ul style={{ width: 800 }}>
              {!reviewQuery.isLoading && reviewQuery.data && reviewQuery.data.map((review) =>
                <li key={review.id}>{review.review}</li>)
              }
            </ul>
          </div>
          <div>
            {/* Like button under construction */}
            <Link className="detail-navbar-link" to={`addreview`}>Like</Link>
            <Link className="detail-navbar-link" to={`addreview`}>Add Review</Link>
            {/* Edit review button under construction */}
            <Link className="detail-navbar-link" to={``}>Edit Review</Link>



          </div>

        </>
      }
    </>
  )
}