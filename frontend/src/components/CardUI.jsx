import React from 'react'
import './card.css'

const Card = props =>{
   return(
 
    <div className='card text-center'>
        <div className='overflow'>
            <img src={props.imgsrc} alt="doctors" className='card-img-top'/>

        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>{props.title}</h4>
            <p className='card-text text-secondary'>{props.text} </p>
            <a href={props.lien} className='btn btn-outline-warning'>See more</a>

        </div>
 

    </div>

   );
}


export default Card;