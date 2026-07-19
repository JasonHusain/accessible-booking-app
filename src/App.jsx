//Imports

//React
import { useState } from "react";

//Components
import BookingForm from "./components/BookingForm";
import ConfirmationSummary from "./components/ConfirmationSummary";

//CSS Styles
import "./App.css";

//Data
import { practitioners, times } from "./data/appointmentOptions";

function App() {
  //Practitioner

  const [bookingObject, setBookingObject] = useState(null);
  const [formFocus, setFormFocus] = useState(0);

  function saveBooking(booking) {
    setBookingObject(booking);
  }

  function startNewBooking() {
    setBookingObject(null);
    setFormFocus((prev) => prev + 1);
  }

  return (
    <main className="app-container">
      <h1 className="booking-invitation"> Book An Appointment </h1>
      <p className="clinic-name"> Inclusive Care Health Centre </p>
      <BookingForm
        practitionersList={practitioners}
        timesList={times}
        focusSignal={formFocus}
        onBookingSubmit={saveBooking}
      />
      <ConfirmationSummary
        practitionersList={practitioners}
        timesList={times}
        booking={bookingObject}
        onBookingReset={startNewBooking}
      />
    </main>
  );
}
export default App;
