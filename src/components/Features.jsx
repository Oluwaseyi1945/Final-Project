import { useState } from 'react'
import '../App.css'
import ic from "../assets/icon1.png";
import ic2 from "../assets/icon2.png";
import ic3 from "../assets/vector.png";
import ic4 from "../assets/calls.png";


function Features (){
    const features = [
      {
        title: "High Quality",
        text: "crafted from top materials",
        icon: ic,
      },
      {
        title: "Warranty Protection",
        text: "Over 2 years",
        icon: ic2,
      },
      {
        title: "Free Shipping",
        text: "Order over 150 $",
        icon: ic3,
      },
      {
        title: "24 / 7 Support",
        text: "Dedicated support",
        icon: ic4,
      },
    ];

    return(
         <section className='features '>
          <div className="container">
  <div className="row justify-content-center">
    {features.map((item, index) => (
      <div key={index} className="col-6 col-md-3 px-3 mb-4">
        <div className="features-item">
          <img src={item.icon} alt={item.title} />
          <div className="features-text">
            <h6>{item.title}</h6>
            <h6>{item.text}</h6>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
         </section>
   
  
    )
}

export default Features;