import React from 'react'
import { Link } from 'react-router'
import ArticleIndex from '../../blog/ArticleIndex'
import PageNav from '../../blog/ArticleIndexPageNav'


class AuthorBio extends React.Component {
  render() {
    return (
        <main className="authorBio--container">
          <Link to="/" className="logo-title"><img src="./images/blog-title.svg" alt="Aspiring Writer's Alley - Link to Home"/></Link>
            <div className="authorBio--bio">
              <img className="--portrait" src="./images/lewis-carroll.png" alt="Lewis Carroll Portrait"/>
              <h1>Lewis Carroll</h1>
              <p>Charles Lutwidge Dodgson (27 January 1832 – 14 January 1898), better known by his pen name, Lewis Carroll, was an English writer, mathematician, logician, Anglican deacon and photographer.</p>
              <p>His most famous writings are Alice's Adventures in Wonderland, its sequel Through the Looking-Glass, which includes the poem Jabberwocky, and the poem The Hunting of the Snark, all examples of the genre of literary nonsense.</p>
              <p>He is noted for his facility at word play, logic, and fantasy. There are societies in many parts of the world (including the United Kingdom, Japan, the United States, and New Zealand[3]) dedicated to the enjoyment and promotion of his works and the investigation of his life. In 1982, his great-nephew unveiled his memorial stone in Poets' Corner, Westminster Abbey.</p>
            </div>
            <ArticleIndex />
            <PageNav />
        </main>
    )
  }
}

export default AuthorBio