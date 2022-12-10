import React from "react";
import Button from "../Shared/Button";
import TreatmentImg from '../../assets/images/treatment.png';
const Treatment = () => {
  return (
    <div class="hero-content flex-col lg:flex-row lg:px-16 my-32">
      <figure>
        <img className="sm:max-w-sm lg:max-w-lg" src={TreatmentImg} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        <div class="card-actions justify-end">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
