import request from 'superagent'
import { BookData, BookDraft } from '../../models/books'

const rootUrl = '/api/v1'

export function getBooks(): Promise<BookData[]> {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body
  })
}

export async function addNewBook(newBook: BookDraft) {
  return await request.post(rootUrl + '/books').send(newBook)
}

export function getReviewsByBookId(bookId: number) {
  return request
    .get(rootUrl + `/books/${bookId}/reviews`)
    .then((res) => {
      return res.body
    })
}