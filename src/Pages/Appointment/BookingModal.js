import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form className="grid grid-cols-1 gap-4 justify-items-center mt-2">
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />

            <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option> {slot} </option>)
                }
            </select>

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
