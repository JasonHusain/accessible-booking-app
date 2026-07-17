import { useState, useEffect, useRef } from "react";
import "./BookingForm.css";

//BookingForm component
function BookingForm({
  practitionersList,
  timesList,
  onBookingSubmit,
  focusSignal
}) {
  // First Name
  const [firstName, setFirstName] = useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  //Last Name
  const [lastName, setLastName] = useState("");

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  const [practitioner, setPractitioner] = useState("");

  function handlePractitioner(event) {
    setPractitioner(event.target.value);
  }

  //Appointment Date
  const [appointmentDate, setAppointmentDate] = useState("");

  function handleAppointmentDate(event) {
    setAppointmentDate(event.target.value);
  }

  //Appointment Time
  const [appointmentTime, setAppointmentTime] = useState("");

  function handleAppointmentTime(event) {
    setAppointmentTime(event.target.value);
  }

  //Form submission handler
  function handleFormSubmission(event) {
    event.preventDefault();
    const booking = {
      firstName,
      lastName,
      practitioner,
      appointmentDate,
      appointmentTime
    };

    onBookingSubmit(booking);

    //Reset form fields
    setFirstName("");
    setLastName("");
    setPractitioner("");
    setAppointmentDate("");
    setAppointmentTime("");
  }

  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, [focusSignal]);

  return (
    <section>
      <h2 className="appointment-details-heading"> Booking Form </h2>

      <form className="booking-form" onSubmit={handleFormSubmission}>
        {/* Patient Name */}
        <label htmlFor="firstName">First Name</label>
        <input
          ref={firstNameRef}
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
          required
        />
        <label htmlFor="lastName"> Last Name </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
          required
        />
        {/* Practitioner List */}
        <label htmlFor="practitioner"> Practitioner List </label>
        <select
          id="practitioner"
          name="practitioner"
          value={practitioner}
          onChange={handlePractitioner}
          required
        >
          {" "}
          <option value=""> -- Select a Practitioner </option>
          {practitionersList.map((practitioner) => (
            <option key={practitioner.value} value={practitioner.value}>
              {practitioner.label}{" "}
            </option>
          ))}{" "}
        </select>
        {/* Date */}
        <label htmlFor="appointmentDate"> Date </label>
        <input
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          value={appointmentDate}
          onChange={handleAppointmentDate}
          required
        />
        {/* Time */}
        <label htmlFor="appointmentTime"> Time </label>
        <select
          id="appointmentTime"
          name="appointmentTime"
          value={appointmentTime}
          onChange={handleAppointmentTime}
          required
        >
          <option value="">-- Select a Time --</option>

          <optgroup label="Morning">
            {" "}
            {timesList.slice(0, 3).map((appointmentTime) => (
              <option key={appointmentTime.value} value={appointmentTime.value}>
                {appointmentTime.label}{" "}
              </option>
            ))}{" "}
          </optgroup>
          <optgroup label="Afternoon">
            {timesList.slice(3, 8).map((appointmentTime) => (
              <option key={appointmentTime.value} value={appointmentTime.value}>
                {appointmentTime.label}{" "}
              </option>
            ))}{" "}
          </optgroup>
        </select>

        {/* Submit Button */}
        <button type="submit">BOOK APPOINTMENT</button>
      </form>
    </section>
  );
}

export default BookingForm;
