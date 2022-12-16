import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>
            {
                slots.length > 0
                ? <span> {slots[0]} </span>
                : <span className="text-red-500" > No slot available</span>
            }
        </p>
        <p hidden={slots.length===0} >{slots.length} {slots.length > 1 ? 'slots' : 'slot' }  Available </p>
        <div class="card-actions">
          <button disabled={slots.length===0} class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
