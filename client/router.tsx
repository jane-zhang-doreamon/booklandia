import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import ReviewList from './components/ReviewList'
import Home from './components/Home'
import AddReviewForm from './components/AddReviewForm'
import BookDetails from './components/BookDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />

      <Route path='books/shelf'>
        <Route path='' element={<BookList />} />
        <Route path=':id' element={<BookDetails />} />
        <Route path=':id/addreview' element={<AddReviewForm />} />

      </Route>

      <Route path='books/add' element={<AddBookForm />} />



    </Route>
  )
)

export default router