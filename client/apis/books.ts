import request from 'superagent'
import { BookData } from '../../models/books'

const rootUrl = '/api/v1'

export function getBooks(): Promise<BookData[]> {
  return request.get(rootUrl + '/books').then((res) => {
    return res.body
  })
}