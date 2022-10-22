import React from 'react'
import './Card.css'
function Card(props) {
  
  return (
    <>
    <div className='newsCard' key={props.id} onClick={props.onClickHandler}>
        <img className='shareImg' src="https://www.mtctutorials.com/wp-content/uploads/2019/04/Share-button-png-by-mtc-tutorials.png" alt="" />
        <img className="newsImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA0AJjyyfl9SC28cYh0H_OuChB1pUM53glA&usqp=CAU" alt="" />
        <div className='textBox' >
          <h1>{props.title} </h1>
          <h2>{props.body}</h2>
          <p>www.bbcnews.com</p>
        </div>
      </div>
  </>
  )
}

export default Card
