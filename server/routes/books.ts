import { Router } from 'express'

import * as db from '../db/books'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    // get books name array
    // res.json({ books: books.map((book) => book.name) })
    // get all books object array
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong with getting books.' })
  }
})


router.post('/', async (req, res) => {
  const newBook = req.body
  await db.addBook(newBook)
  res.sendStatus(201)
})

router.get('/:id/reviews', async (req, res) => {
  try {
    const bookId = Number(req.params.id)
    const reviews = await db.getReviewsByBookId(bookId)
    res.json(reviews)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong with getting reviews by book id' })
  }
})

router.post('/:id/reviews', async (req, res) => {
  const newReview = req.body
  const bookId = Number(req.params.id)
  await db.addReviewByBookId(bookId, newReview)
  res.sendStatus(201)
})


export default router
