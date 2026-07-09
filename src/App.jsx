import BookingForm from "./components/BookingForm";
import ConfirmationSummary from "./components/ConfirmationSummary";

function App() {
  return (
    <main>
      <h1> Book An Appointment </h1>
      <p> Inclusive Care Health Centre </p>
      <BookingForm />
      <ConfirmationSummary />
    </main>
  );
}
export default App;
