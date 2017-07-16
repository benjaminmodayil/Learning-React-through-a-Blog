import React from 'react'

class Aside extends React.Component {
  render() {
    const { post } = this.props

    return (
      <aside className="author-info">
        <img src="/images/lewis-carroll.png" alt={post.author.name} />
        <div className="author-info__bio">
          <h2>{post.author.name}</h2>
          <p>
            {post.author.bio}
          </p>
          <p>
            His most famous writings are Alice's Adventures in Wonderland, its sequel Through the Looking-Glass, which
            includes the poem Jabberwocky, and the poem The Hunting of the Snark, all examples of the genre of literary
            nonsense.
          </p>
          <p>
            He is noted for his facility at word play, logic, and fantasy. There are societies in many parts of the
            world (including the United Kingdom, Japan, the United States, and New Zealand[3]) dedicated to the
            enjoyment and promotion of his works and the investigation of his life. In 1982, his great-nephew unveiled
            his memorial stone in Poets' Corner, Westminster Abbey.
          </p>
        </div>
      </aside>
    )
  }
}

export default Aside
