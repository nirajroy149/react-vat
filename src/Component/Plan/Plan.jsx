import React from 'react';
import "./plan.css";
import Card from "./Card";
import data from "./data"



function Plan(){
  return (
    <>
        <section className="section-plans" id="section-plans">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Hosting Plans
        </h2>
      </div>

    <div className="row">
        {data.map((item,index)=>{
            return <Card id={index} key={index} icon={item.icon}  type={item.planType} details={item.details} cssNo={item.cssNo} price={item.price}/>
        })}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">Get Started</a>
      </div>
    </section>
    </>
  )
}

export default Plan;