import { useQuery } from 'react-query'
import { getReviewsByBookId } from '../apis/books'

interface ReviewListProps {
  bookId: number
}

function ReviewList({ bookId }: ReviewListProps) {
  const { isLoading, data } = useQuery('getReviewsByBookId', async () => {

    return await getReviewsByBookId(bookId);
  })

  console.log(data)
  return (
    <>
      <div>
        <ul>
          {!isLoading && data && data.map((review) => (
            <li key={review.id}>

              <div>{review.review}</div>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ReviewList