import { useState } from "react";

//BookingForm component
function BookingForm() {
  // First Name
  const [firstName, setFirstName] = useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
    console.log(event.target.value);
  }

  //Last Name
  const [lastName, setLastName] = useState("");

  function handleLastName(event) {
    setLastName(event.target.value);
    console.log(event.target.value);
  }

  //Practitioner
  const [practitioner, setPractitioner] = useState("");

  function handlePractitioner(event) {
    setPractitioner(event.target.value);
    console.log(event.target.value);
  }

  //Appointment Date
  const [appointmentDate, setAppointmentDate] = useState("");

  function handleAppointmentDate(event) {
    setAppointmentDate(event.target.value);
    console.log(event.target.value);
  }

  //Appointment Time
  const [appointmentTime, setAppointmentTime] = useState("");

  function handleAppointmentTime(event) {
    setAppointmentTime(event.target.value);
    console.log(event.target.value);
  }

  return (
    <section>
      <h2> Appointment Details </h2>

      <form>
        {/* Patient Name */}
        <label htmlFor="firstName">First Name</label>
        <input
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
          <option value=""> -- Select a Practitioner -- </option>
          <option value="alex-robertson">Dr. Alex Robertson </option>
          <option value="penelope-smith">Dr. Penelope Smith</option>
          <option value="sara-khan">Dr. Sara Khan </option>
          <option value="baljit-singh">Dr. Baljit Singh </option>
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
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
          </optgroup>

          <optgroup label="Afternoon">
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
          </optgroup>
        </select>

        {/* Submit Button */}
        <button type="submit">Book Appointment</button>
      </form>
    </section>
  );
}

export default BookingForm;
