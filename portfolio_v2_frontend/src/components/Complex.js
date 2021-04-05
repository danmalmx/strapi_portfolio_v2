import React from 'react'

const Complex = ({data}) => {
  console.log("Complex.render data", data);
  const { title, subtitle, text_position, background } = data;
  const url = `http://localhost:1337${background[0].url}`
  return (
    <div className="complex" style={{backgroundImage: `url(${url})`}}>
      <div className="v-center">
        <div className={`complex__center complex__${text_position}`}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Complex
