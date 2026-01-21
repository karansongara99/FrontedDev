import React from 'react'

function Card({className, img,title, content}) {
  return (
    <div className='card p-3 my-3 border'>
      <div className={className}>
        <img src={img} alt="Profile" />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card
