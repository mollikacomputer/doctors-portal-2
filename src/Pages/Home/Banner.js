import React from "react";
import chair from '../../assets/images/chair.png';
import Button from "../Shared/Button";
import topBannerBg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div 
    style={{
      background:`url(${topBannerBg})`
    }} 
    className= {`hero min-h-screen `}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt="img"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
