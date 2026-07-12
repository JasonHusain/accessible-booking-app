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
    <section>
      {" "}
      {booking && (
        <>
          {" "}
          <h2> Appointment Summary </h2>
          <ul>
            <li> First Name: {firstName} </li>
            <li>Last Name: {lastName}</li>
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
