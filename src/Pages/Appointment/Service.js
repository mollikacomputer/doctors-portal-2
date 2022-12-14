import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>
            {
                slots.length > 0
                ? <span> {slots[0]} </span>
                : <span className="text-red-500" > No slot available try another day</span>
            }
        </p>
        <p hidden={slots.length===0} >{slots.length} {slots.length > 1 ? 'slots' : 'slot' }  Available </p>
        <div class="card-actions">
          <label 
          for="booking-modal" 
          class="btn"
          disabled={ slots.length===0 } 
          class="btn btn-primary"
          onClick={()=> setTreatment(service)}
          >
            Book Appointment
            </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
