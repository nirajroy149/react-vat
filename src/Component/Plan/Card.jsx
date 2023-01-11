import React from 'react';

function Card({type,cssNo,details,price,icon}){
  return (
    <div className="col-1-of-3">
          <div className="card">
            <div className={`card__side card__side--front-${cssNo}`}>
              <div className={`card__title card__title--${cssNo}`}>
                <i className={icon}></i>
                <h4 className="card__heading">{type}</h4>
              </div>

              <div className="card__details">
                <ul>
                  {details.map((detail,index)=>{
                    return <li key={index} >{detail}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${cssNo}`}>
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">{price}</p>
                </div>
                <a href="#popup" className="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card;


    
