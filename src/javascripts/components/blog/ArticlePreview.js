import React from 'react'
import { Link } from 'react-router'

class ArticlePreview extends React.Component {
  render() {
    const { post } = this.props
    console.log(post)

    return (
      <Link to="/article">
        <div className="article-index__preview">
          <div className="-imageContainer">
            <img src="./images/alice-in-wonderland.png" alt="Picture of 'Author'" />
          </div>
          <div className="-preview">
            <h1>dfad</h1>
            <div className="articlePreview-postMeta">
              <small className="article-index__authorName">
                <Link to="/author">dfad</Link>
              </small>
              <small className="article-index__date">
                November 26, 1865
              </small>
            </div>
            <p>
              Alice was beginning to get very tired of sitting by her sister on
              the bank, and of having nothing to do: once or twice she had
              peeped into the book her sister was reading, but it had no
              pictures or conversations in it, 'and what is the use of a book,'
              thought Alice...
            </p>
          </div>
        </div>
      </Link>
    )
  }
}

export default ArticlePreview
