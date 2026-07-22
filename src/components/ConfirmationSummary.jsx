import { useEffect, useRef } from "react";
import "./ConfirmationSummary.css";

function ConfirmationSummary({
  practitionersList,
  timesList,
  monthsList,
  daysList,
  yearsList,
  booking,
  onBookingReset
}) {
  if (!booking) {
    return null;
  }

  //Destructure booking object
  const {
    firstName,
    lastName,
    practitioner,
    appointmentMonth,
    appointmentDay,
    appointmentYear,
    appointmentTime
  } = booking;

  //Optional chining to find specific booking information
  const practitionerName = practitionersList.find(
    (practitioner) => practitioner.value === booking.practitioner
  )?.label;

  const bookedMonth = monthsList.find(
    (month) => month.value === booking.appointmentMonth
  )?.label;

  const bookedDay = daysList.find(
    (day) => day.value === booking.appointmentDay
  )?.label;

  const bookedYear = yearsList.find(
    (year) => year.value === booking.appointmentYear
  )?.label;

  const bookedTime = timesList.find(
    (time) => time.value === booking.appointmentTime
  )?.label;

  const bookingConfirmationRef = useRef(null);

  useEffect(() => {
    bookingConfirmationRef.current.focus();
  }, []);

  return (
    <section
      className="confirmation-summary"
      tabIndex={-1}
      ref={bookingConfirmationRef}
    >
      <h2 className="confirmation-heading">Thank you!</h2>
      <p className="confirmation-message">
        Your appointment request has been received. We'll contact you if there
        are any issues with your booking.
      </p>
      <h3 className="confirmation-subheading">Appointment Details</h3>{" "}
      <ul className="confirmation-details">
        <li>
          Patient Name: {firstName} {lastName}
        </li>
        <li>Practitioner: {practitionerName}</li>
        <li>
          Date: {bookedMonth} {bookedDay}, {bookedYear}{" "}
        </li>
        <li>Time: {bookedTime}</li>
      </ul>{" "}
      <button type="button" onClick={onBookingReset}>
        {" "}
        BOOK ANOTHER APPOINTMENT{" "}
      </button>
    </section>
  );
}

export default ConfirmationSummary;
