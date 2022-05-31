// import react from "react"
import Article from "./Article";


function ArticleList({ posts }) {
  const articleListing = posts.map(post => {
    console.log("POSTS", post)
    return (
      <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    )
  }
  )
  return (
    <main>
      {articleListing}
    </main>
  )
}

export default ArticleList