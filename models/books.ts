export interface BookDraft {

  name: string
  picture: string
}

export interface BookData extends BookDraft {
  id: number
}