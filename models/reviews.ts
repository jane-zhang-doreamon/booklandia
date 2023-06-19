export interface ReviewDraft {
  review: string
  bookId: number
}

export interface ReviewData extends ReviewDraft {
  id: number
}