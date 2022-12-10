import React from "react";
import chair from '../../assets/images/chair.png';
const Banner = () => {
  return (
    <div className= {`hero min-h-screen bg-base-200`}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm md:max-w-2xl rounded-lg shadow-2xl" alt="img"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
