import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render() {
    return (
      <header className="article-header">
        <div className="article-header__inner">
          <Link to="/"><img src="/images/blog-title-alt.svg" alt="Aspiring Writers Alley Blog" /></Link>
        </div>
        <div className="article-header__bg" />
      </header>
    )
  }
}

export default Header
