import { useState } from "react";
import BookingForm from "./components/BookingForm";
import ConfirmationSummary from "./components/ConfirmationSummary";

function App() {
  const [bookingObject, setBookingObject] = useState(null);

  function bookingCallback(booking) {
    setBookingObject(booking);
  }

  return (
    <main>
      <h1> Book An Appointment </h1>
      <p> Inclusive Care Health Centre </p>
      <BookingForm onBookingSubmit={bookingCallback} />
      <ConfirmationSummary booking={bookingObject} />
    </main>
  );
}
export default App;
