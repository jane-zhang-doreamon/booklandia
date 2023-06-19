import { useQuery } from 'react-query'
import { getBooks } from '../apis/books'
import { useState } from 'react';

function Home() {
  const { isLoading, data } = useQuery('getReviewsByBookId', async () => {
    return await getBooks();
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: "100%",
    position: "relative",
    marginTop: '40px'
  }

  const containerStyles = {
    width: "800px",
    height: "450px",
    margin: "0 auto",
  }

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${data && data[currentIndex].picture})`
  }

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "180px",
    fontSize: "45px",
    color: '#fff',
    zindex: 1,
    cursor: 'pointer',
  }

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "180px",
    fontSize: "45px",
    color: '#fff',
    zindex: 1,
    cursor: 'pointer',
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data && data.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <>
      <div className="app">

        <div style={sliderStyles}>
          <div style={leftArrowStyles} onClick={goToPrevious}>⬅️</div>
          <div style={rightArrowStyles} onClick={goToNext}>➡️</div>
          <div style={containerStyles}>
            <div style={slideStyles}>


            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home