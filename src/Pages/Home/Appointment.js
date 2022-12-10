import React from "react";
import AppointmentImg from '../../assets/images/appointment.png';
import Doctor from '../../assets/images/doctor.png';
import Button from "../Shared/Button";
const Appointment = () => {
  return (
    <div style={{
        background:`url(${AppointmentImg})`
    }}
    class="hero-content flex-col lg:flex-row lg:px-16 my-16">
      <figure>
        <img
          className="hidden lg:block lg:max-w-lg mt-[-100px] mb-[-16px]"
          src={Doctor}
          alt="Album"
        />
      </figure>
      <div class="card-body text-white text-left">
        <h3 className="text-primary ">Appointment</h3>
        <h2 class="card-title">Make an appointment Today</h2>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
        </p>
        <div class="card-actions justify-start ">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
