import { useQuery } from 'react-query'
import { getBooks } from '../apis/books'
import { Link } from 'react-router-dom';

function BookList() {
  const { isLoading, data } = useQuery('getReviewsByBookId', async () => {
    return await getBooks();
  })

  return (
    <>
      <h1 className='title'>Booklandia</h1>
      <div className="bookList">


        {!isLoading && data && data.map((book) => (

          <div className='bookContainer' key={book.id}>
            <div className='book'>
              <img className='picture' src={book.picture} alt={`${book.name}`} style={{ width: 200, }} />

              <Link className='name' to={`${book.id}`}>{book.name}</Link>
            </div>
          </div>

        ))}

      </div>
    </>
  )
}

export default BookList