import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="mainContainer">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
