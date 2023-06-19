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
        <h1 style={{ fontSize: 50 }}>Booklandia</h1>
        <ul>
          {!isLoading && data && data.map((book) => (
            <li key={book.id}>
              <div>
                <div>
                  <img src={book.picture} alt={`${book.name}`} style={{ width: 200, }} />
                </div>
                <div>{book.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookList