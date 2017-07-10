import React from 'react'
import ArticlePreview from './ArticlePreview'

class ArticleIndex extends React.Component {

  render() {
    return (
      <div className="article-index">
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    )
  }
}

export default ArticleIndex