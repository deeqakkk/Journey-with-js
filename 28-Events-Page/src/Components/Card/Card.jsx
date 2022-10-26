import React from 'react'
import "./Card.css"

const Card = ({event}) => {
  return (<>
    <div className='card'>
        <div className="card_img">
            <img src={event.image} alt="" />
        </div>
        <div className="card_content">
            <h2 className='card_title'>{event.title}</h2>
            <h3 className='card_date'>{event.date}</h3>
            <h4 className='card_venue_time'>{event.venue}</h4>
        </div>
        <button className='card_btn' type='submit'>Register Here</button>
    </div>
    
    </>
  )
}

export default Card