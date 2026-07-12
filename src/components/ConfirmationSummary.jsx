function ConfirmationSummary({ booking }) {
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
            <li>Practitioner: {practitioner}</li>
            <li>Date: {appointmentDate}</li>
            <li>Time: {appointmentTime}</li>
          </ul>{" "}
        </>
      )}{" "}
    </section>
  );
}

export default ConfirmationSummary;
