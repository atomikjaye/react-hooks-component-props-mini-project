// import react from "react"
function minutesToRead(minutes) {
  let cupsArr = []
  let bentoArr = []
  let fullCups = Math.floor(minutes / 5)
  let fullBento = Math.floor(minutes / 10)
  if (minutes < 30) {
    for (let i = 0; i < fullCups; i++) {
      cupsArr.push('☕')
    }
    // console.log("Cups", cupsArr)
    return cupsArr
  } else {
    for (let i = 0; i <= fullBento; i++) {
      bentoArr.push('🍱')
      // console.log("Cups", bentoArr)
    }
    return bentoArr
  }

  // get number, see how many times 5 goes into the number
  // if a full 5, add a coffee cup, if less than five, leave cup alone

}

function Article({
  title,
  date = 'January 1, 1970',
  preview,
  minutes
}) {


  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesToRead(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article