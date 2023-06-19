import connection from './connection'
import { BookData } from '../../models/books'
import { ReviewData } from '../../models/reviews'

export function getAllBooks(db = connection): Promise<BookData[]> {
  return db('books').select()
}

export function addBook(newBook: BookData, db = connection) {
  return db('books').insert(newBook)
}

export function getReviewsByBookId(bookId: number, db = connection): Promise<ReviewData[]> {
  return db('reviews').where('book_id', bookId).select()
}

export function addReviewByBookId(bookId: number, newReview: ReviewData, db = connection) {
  return db('reviews').where('book_id', bookId).insert({ id: newReview.id, review: newReview.review, book_id: bookId })
}