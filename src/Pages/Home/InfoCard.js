import React from "react";

const InfoCard = ({ image, bgClass, title }) => {
  return (
    <div
      className={`card card-side bg-base-100 shadow-xl bg-primary text-white ${bgClass} px-2`}
    >
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {title} </h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
