import { FormEvent, useState } from "react"
import { BookDraft } from "../../models/books"
import { useMutation, useQueryClient } from "react-query"
import { addNewBook } from "../apis/books"


function AddBookForm() {
  const queryClient = useQueryClient()
  const mutations = useMutation(addNewBook, {
    onSuccess: () => {
      queryClient.invalidateQueries('getBooks')
    }
  })

  const [newBook, setNewBook] = useState({} as BookDraft)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    setNewBook({ ...newBook, [name]: value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    mutations.mutate(newBook)
  }
  return (
    <>
      <form noValidate>
        <label htmlFor="name">Book Name</label>
        <input type="text" name="name" onChange={handleChange} value={newBook.name} />
        <label htmlFor="picture">Book Picture</label>
        <input type="text" name="picture" onChange={handleChange} value={newBook.picture} />
        <button type="button" onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}

export default AddBookForm