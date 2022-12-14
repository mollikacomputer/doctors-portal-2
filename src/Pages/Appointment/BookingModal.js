import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log( _id, name, slot)
    setTreatment(null)
  }
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
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center mt-2">
            <input
              type="text"
              name="date"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />

            <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option value={slot} > {slot} </option>)
                }
            </select>

            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="email address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone number"
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
