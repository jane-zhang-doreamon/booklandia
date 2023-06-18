import { useQuery } from 'react-query'
import { getBooks } from '../apis/books'

function BookList() {
  const { isLoading, data } = useQuery('getBooks', async () => {
    return await getBooks();
  })

  console.log(data)
  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with books!</h1>
        <ul>
          <p>Testing</p>
          {!isLoading && data && data.map((book) => (
            <li key={book.id}>
              <div>{book.name}</div>
              <div>
                <img src={book.picture} alt={`${book.name}`} />

              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookList