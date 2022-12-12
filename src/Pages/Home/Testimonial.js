import React from "react";
import people1 from '../../assets/images/people1.png';
const Testimonial = () => {
  return (
    <section>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={people1} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
