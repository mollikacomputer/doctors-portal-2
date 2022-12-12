import React from "react";
import contactBgImg from "../../assets/images/appointment.png";
import Button from "../Shared/Button";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contactBgImg})`,
      }}
      className="flex items-center items-center"
    >
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            {/* <!-- xs --> */}
            <input
              type="text"
              placeholder="name"
              className="input input-bordered input-md w-full max-w-xs mb-2"
            />
            {/* <!-- sm --> */}
            <input
              type="email"
              placeholder="email"
              className="input input-bordered input-md w-full max-w-xs"
            />
            {/* <!-- md --> */}
            <input
              type="text"
              placeholder="phone"
              className="input input-bordered input-md w-full max-w-xs my-2"
            />
            {/* <!-- lg --> */}
            <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs" placeholder="Your review"></textarea>
           <br/>
            <Button>Submit</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
