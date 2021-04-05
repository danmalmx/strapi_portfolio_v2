import React from 'react'

const Article = ({data}) => {
  console.log("Article.render data", data);
  const { title, link, picture } = data;
  const url = `http://localhost:1337${picture[0].url}`

  return (
    <a href={link} target="_blank">
      <div className="article" style={{backgroundImage: `url(${url})` }}>
        <div className="v-center">
          <h1>{title}</h1>
        </div>
      </div>
    </a>
  )
}

export default Article
