import React from "react";

const InfoCard = ({image, bgClass, title}) => {
  return (
    <div class= {`card card-side bg-base-100 shadow-xl bg-primary ${bgClass} px-2`}>
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title"> {title} </h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
