import React from 'react'

export default ({data}) => {
  const {big_text, author, background_color} = data;
  return (
    <div className="quote" style={{backgroundColor: background_color}}>
      <div className="v-center">
        <h1>{big_text}</h1>
        <p>{author}</p>
      </div>
    </div>
  )
}
