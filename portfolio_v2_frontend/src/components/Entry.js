import React from 'react'

const Entry = ({data}) => {
  console.log("Entry.render data", data);
  const { title, subtitle, link, color  }= data;
  return (
    <a href={link}>
    <div className="entry" style={{backgroundColor: color}} target="_blank">
      <div className="v-center">
        <div className="entry__content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
    </a>
  )
}

export default Entry
