import { useState } from "react";
import BookingForm from "./components/BookingForm";
import ConfirmationSummary from "./components/ConfirmationSummary";
import "./App.css";

function App() {
  //Practitioner
  const practitioners = [
    { value: "alex-robertson", label: "Dr. Alex Robertson" },
    { value: "penelope-smith", label: "Dr. Penelope Smith" },
    { value: "sara-khan", label: "Dr. Sara Khan" },
    { value: "baljit-singh", label: "Dr. Baljit Singh" }
  ];

  //Times
  const times = [
    { value: "9:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" }
  ];

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
