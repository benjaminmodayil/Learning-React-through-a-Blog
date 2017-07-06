import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

  render() {
    return (
      <header>
          <Link to="/" className="title"><img src="./images/blog-title.svg" alt=""/></Link>
          <div className="category-selector">
            <label htmlFor="category">Category</label>
            <select id="category" name="category">
              <option selected="default" value="default">Default</option>
              <option value="hemmingway">Hemmingway</option>
              <option value="fredddrick">Fredddrick</option>
              <option value="alf">Alf</option>
            </select>
          </div>
      </header>
    )
  }
}

export default Header