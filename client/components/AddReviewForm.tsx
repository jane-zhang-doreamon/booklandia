import { FormEvent, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { addReviewByBookId } from "../apis/books"
import { ReviewDraft } from "../../models/reviews"
import { useParams } from "react-router-dom"


function AddReviewForm() {
  const bookId = useParams().id
  const queryClient = useQueryClient()
  const mutations = useMutation((newReview: ReviewDraft) => addReviewByBookId(Number(bookId), newReview), {
    onSuccess: () => {
      queryClient.invalidateQueries('getReviewsByBookId')
    }
  })

  const [newReview, setNewReview] = useState({} as ReviewDraft)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    setNewReview({ ...newReview, [name]: value })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    mutations.mutate(newReview)
  }
  return (
    <>
      <form noValidate>
        <label htmlFor="name">Review</label>
        <input type="text" name="review" onChange={handleChange} value={newReview.review} />

        <button type="button" onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}

export default AddReviewForm