import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";

import Services from "./pages/Services";
import GeneralMedicine from "./pages/GeneralMedicine";
import Cardiology from "./pages/Cardiology";
import Pediatrics from "./pages/Pediatrics";

import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />

          <Route path="/services" element={<Services />}>
            <Route
              path="general-medicine"
              element={<GeneralMedicine />}
            />
            <Route path="cardiology" element={<Cardiology />} />
            <Route path="pediatrics" element={<Pediatrics />} />
          </Route>

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route path="/patients" element={<Patients />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;