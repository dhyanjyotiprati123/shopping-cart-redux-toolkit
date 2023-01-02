import React from 'react'

const PopCard = ({prod}) => {
  return (
    <div className='popcard'>
        <figure className="popcard-figure">
            <img src={prod.image} alt={prod.name} />
        </figure>
        <h1>{prod.name}</h1>
        <h2>Qty:{prod.qty}</h2>
    </div>
  )
}

export default PopCard