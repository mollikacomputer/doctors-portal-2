import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { GridLoader } from "react-spinners";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formattedDate = format(date, "PP")
  const handleBooking = event =>{
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log( _id, name, slot)
    const booking = {
      treatmentId:_id,
      treatment:name,
      date:formattedDate,
      slot,
      patient:user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    }
    fetch('http://localhost:4000/booking', {
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast(`Appoinment is set ${formattedDate} at ${slot}`)
      }
      else{
        toast.error(`Already have an appointment ${data.booking?.date} at ${data.booking?.slot}`)
      }
      setTreatment(null);
    })
  }
  if(loading){
    return <GridLoader color="#36d7b7" />
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
              disabled
              value={user?.displayName ? user?.displayName : "Name is Not found"}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
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
