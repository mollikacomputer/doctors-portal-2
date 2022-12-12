import React from "react";
import QuoteImg from '../../assets/icons/quote.svg';
const Testimonials = () => {
  return (
    <div>
      <div>
        <div className="flex flex-between">
          <h3 className="text-primary text-start">Testimonials</h3>
          <h2 className="text-3xl text-start">What Our Patients Says</h2>
        </div>
        <div>
        <img src={QuoteImg} alt="Album" />
        </div>
      </div>
      <div>


      </div>
    </div>
  );
};

export default Testimonials;
