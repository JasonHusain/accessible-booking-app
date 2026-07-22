import { useState, useEffect, useRef } from "react";
import "./BookingForm.css";

//BookingForm component
function BookingForm({
  practitionersList,
  timesList,
  monthsList,
  daysList,
  yearsList,
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

  //Practitioner
  const [practitioner, setPractitioner] = useState("");

  function handlePractitioner(event) {
    setPractitioner(event.target.value);
  }

  //Date Information
  //Appointment Month
  const [appointmentMonth, setAppointmentMonth] = useState("");

  function handleAppointmentMonth(event) {
    setAppointmentMonth(event.target.value);
  }

  //Appointment Day
  const [appointmentDay, setAppointmentDay] = useState("");

  function handleAppointmentDay(event) {
    setAppointmentDay(event.target.value);
  }

  //Appointment Year
  const [appointmentYear, setAppointmentYear] = useState("");

  function handleAppointmentYear(event) {
    setAppointmentYear(event.target.value);
  }

  //Appointment Time
  const [appointmentTime, setAppointmentTime] = useState("");

  function handleAppointmentTime(event) {
    setAppointmentTime(event.target.value);
  }

  //Helper function to get the last day of a month
  function getLastDayOfMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const lastDayOfMonth = getLastDayOfMonth(
    Number(appointmentMonth),
    Number(appointmentYear)
  );

  //Reset appointmentDay if number is too high
  if (appointmentDay && Number(appointmentDay) > lastDayOfMonth) {
    setAppointmentDay("");
  }

  //Form submission handler
  function handleFormSubmission(event) {
    event.preventDefault();
    const booking = {
      firstName,
      lastName,
      practitioner,
      appointmentMonth,
      appointmentDay,
      appointmentYear,
      appointmentTime
    };

    onBookingSubmit(booking);

    //Reset form fields
    setFirstName("");
    setLastName("");
    setPractitioner("");
    setAppointmentMonth("");
    setAppointmentDay("");
    setAppointmentYear("");
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
        {/* Date Information */}
        {/* Month */}
        <fieldset>
          <legend> Appointment Date </legend>

          <div className="date-controls">
            <div>
              <label htmlFor="month"> Month </label>
              <select
                id="appointmentMonth"
                name="appointmentMonth"
                value={appointmentMonth}
                onChange={handleAppointmentMonth}
                required
              >
                {" "}
                <option value=""> -- Select Month -- </option>
                {monthsList.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}{" "}
                  </option>
                ))}{" "}
              </select>
            </div>

            {/* Day */}
            <div>
              <label htmlFor="appointmentDay"> Day </label>
              <select
                id="appointmentDay"
                name="appointmentDay"
                value={appointmentDay}
                onChange={handleAppointmentDay}
                required
              >
                {" "}
                <option value=""> -- Select Day -- </option>
                {daysList
                  .filter((day) => Number(day.value) <= lastDayOfMonth)
                  .map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}{" "}
                    </option>
                  ))}{" "}
              </select>
            </div>

            {/* Year */}
            <div>
              <label htmlFor="appointmentYear"> Year </label>
              <select
                id="appointmentYear"
                name="appointmentYear"
                value={appointmentYear}
                onChange={handleAppointmentYear}
                required
              >
                {" "}
                <option value=""> -- Select Year -- </option>
                {yearsList.map((year) => (
                  <option key={year.value} value={year.value}>
                    {year.label}{" "}
                  </option>
                ))}{" "}
              </select>
            </div>
          </div>
        </fieldset>

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
