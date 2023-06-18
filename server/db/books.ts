import connection from './connection'
import { BookData } from '../../models/books'

export function getAllBooks(db = connection): Promise<BookData[]> {
  return db('books').select()
}

export function addBook(newBook: BookData, db = connection) {
  return db('books').insert(newBook)
}