import React from "react";

const Testimonial = ({ review }) => {
  return (
    <section>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            <p> {review.review}</p>
          </div>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.photo} />
              </div>
            </div>
            <div>
              <h2 className="card-title">{review.name}</h2>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
