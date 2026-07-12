import { useState } from "react";
import BookingForm from "./components/BookingForm";
import ConfirmationSummary from "./components/ConfirmationSummary";

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
    { value: "9:00", appointmentTime: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "153:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" }
  ];

  const [bookingObject, setBookingObject] = useState(null);

  function bookingCallback(booking) {
    setBookingObject(booking);
  }

  return (
    <main>
      <h1> Book An Appointment </h1>
      <p> Inclusive Care Health Centre </p>
      <BookingForm
        practitionersList={practitioners}
        timesList={times}
        onBookingSubmit={bookingCallback}
      />
      <ConfirmationSummary
        practitionersList={practitioners}
        timesList={times}
        booking={bookingObject}
      />
    </main>
  );
}
export default App;
