import React from 'react'

class ArticleIndexPageNav extends React.Component {
  render() {
    return (
      <nav className="article-index__nav">
        <ul>
          <li>
            <a href="">
              <img src="/images/caret-left.svg" alt="Previous Page" />
              <span>Previous</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Next</span>
              <img src="/images/caret-right.svg" alt="Next Page" />
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default ArticleIndexPageNav
