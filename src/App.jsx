import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Contact from "./pages/contact";

import Cardiology from "./pages/Cardiology";
import GeneralMedicine from "./pages/GeneralMedicine";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route
            path="/doctors/:id"
            element={<DoctorDetails />}
          />

          <Route path="/services" element={<Services />} />

          <Route
            path="/services/cardiology"
            element={<Cardiology />}
          />

          <Route
            path="/services/general-medicine"
            element={<GeneralMedicine />}
          />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route path="/patients" element={<Patients />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Home />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;