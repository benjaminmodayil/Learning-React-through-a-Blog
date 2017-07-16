import React from 'react'
import { Link } from 'react-router'

class ArticlePreview extends React.Component {
  render() {
    const { postInfo } = this.props
    const linkId = `/article/${postInfo.id}`
    // this id for the preview is messing with the preview component on the author bio page

    return (
      <div className="article-index__preview" data-id={postInfo.id}>
        <div className="-imageContainer">
          <Link to={linkId}>
            <img src={`${postInfo.thumbnail}`} alt="Picture of 'Author'" />
          </Link>
        </div>
        <div className="-preview">
          <Link to={linkId}><h1>{postInfo.title}</h1></Link>
          <div className="articlePreview-postMeta">
            <span className="article-index__authorName">
              <Link to={`/author/${postInfo.author.id}`} data-id={postInfo.author.id}>{postInfo.author.name}</Link>
            </span>
            <span className="article-index__date">
              {postInfo.meta.date}
            </span>
          </div>
          <Link to={linkId}>
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
