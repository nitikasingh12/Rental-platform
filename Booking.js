import { useState } from "react";

const Booking = () => {
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });

  const handleBooking = () => {
    alert("Booking confirmed!");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Book Your Stay</h2>
      <input 
        type="date" 
        className="border p-2 my-2" 
        onChange={(e) => setDates({ ...dates, checkIn: e.target.value })} 
      />
      <input 
        type="date" 
        className="border p-2 my-2" 
        onChange={(e) => setDates({ ...dates, checkOut: e.target.value })} 
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
