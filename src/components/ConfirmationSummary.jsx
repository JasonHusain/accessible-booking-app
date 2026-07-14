import { useState } from "react";
import "./ConfirmationSummary.css";

function ConfirmationSummary({ practitionersList, timesList, booking }) {
  if (!booking) {
    return null;
  }

  const {
    firstName,
    lastName,
    practitioner,
    appointmentDate,
    appointmentTime
  } = booking;

  const practitionerName = practitionersList.find(
    (practitioner) => practitioner.value === booking.practitioner
  )?.label;

  const bookedTime = timesList.find(
    (time) => time.value === booking.appointmentTime
  )?.label;

  return (
    <section className="confirmation-summary">
      {" "}
      {booking && (
        <>
          {" "}
          <h2 className="confirmation-heading"> Appointment Summary </h2>
          <ul className="confirmation-details">
            <li>
              Patient Name: {firstName} {lastName}
            </li>
            <li>Practitioner: {practitionerName}</li>
            <li>Date: {appointmentDate}</li>
            <li>Time: {bookedTime}</li>
          </ul>{" "}
        </>
      )}{" "}
    </section>
  );
}

export default ConfirmationSummary;
