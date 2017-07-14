import React from 'react'
import { Link } from 'react-router'

class ArticlePreview extends React.Component {
  componentWillMount() {}
  render() {
    const { postInfo } = this.props
    // console.log(this.props)
    return (
      <div className="article-index__preview" data-id={postInfo.id}>
        <div className="-imageContainer">
          <Link to={`/article/${postInfo.id}`}>
            <img src="./images/alice-in-wonderland.png" alt="Picture of 'Author'" />
          </Link>
        </div>
        <div className="-preview">
          <Link to={`/article/${postInfo.id}`}><h1>{postInfo.title}</h1></Link>
          <div className="articlePreview-postMeta">
            <small className="article-index__authorName">
              <Link to="/author" data-id={postInfo.author.id}>{postInfo.author.name}</Link>
            </small>
            <small className="article-index__date">
              {postInfo.meta.date}
            </small>
          </div>
          <Link to={`/article/${postInfo.id}`}>
            <p>
              {postInfo.preview}
            </p>
          </Link>
        </div>
      </div>
    )
  }
}

export default ArticlePreview
