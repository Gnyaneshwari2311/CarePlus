import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addBooking,
  deleteBooking
} from "../redux/bookingSlice";

function Appointments() {
  const dispatch = useDispatch();

  const bookings = useSelector(
    (state) => state.bookings.list
  );

  const nameRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.doctor ||
      !form.date
    ) {
      setMessage("Please fill all fields.");
      nameRef.current.focus();
      return;
    }

    dispatch(
      addBooking({
        id: Date.now(),
        ...form
      })
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: ""
    });

    setMessage("Appointment booked successfully!");
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Book an Appointment</h1>
        <p>Schedule your visit with our doctors</p>
      </div>

      <div className="appointment-layout">
        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Rahul Sharma">
              Dr. Rahul Sharma
            </option>
            <option value="Dr. Priya Rao">
              Dr. Priya Rao
            </option>
            <option value="Dr. Ananya Patel">
              Dr. Ananya Patel
            </option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button type="submit">
            Book Appointment
          </button>

          {message && (
            <p className="form-message">{message}</p>
          )}
        </form>

        <div className="booking-list">
          <h2>Appointments</h2>

          {bookings.length === 0 ? (
            <p>No appointments yet.</p>
          ) : (
            bookings.map((booking) => (
              <div
                className="booking-card"
                key={booking.id}
              >
                <h3>{booking.name}</h3>

                <p>{booking.doctor}</p>

                <p>{booking.date}</p>

                <button
                  onClick={() =>
                    dispatch(deleteBooking(booking.id))
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointments;