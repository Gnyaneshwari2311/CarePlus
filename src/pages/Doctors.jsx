import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [searchParams, setSearchParams] =
    useSearchParams();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    const doctorData = [
      {
        id: 1,
        name: "Dr. Rahul Sharma",
        specialization: "Cardiologist",
        rating: 4.8
      },
      {
        id: 2,
        name: "Dr. Priya Rao",
        specialization: "Pediatrician",
        rating: 4.9
      },
      {
        id: 3,
        name: "Dr. Ananya Patel",
        specialization: "General Physician",
        rating: 4.7
      },
      {
        id: 4,
        name: "Dr. Arjun Kumar",
        specialization: "Neurologist",
        rating: 4.8
      }
    ];

    setDoctors(doctorData);
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    doctor.specialization
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function handleSearch(event) {
    const value = event.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Doctors</h1>
        <p>Meet our experienced healthcare professionals</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search doctor or specialization..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="empty-message">
          No doctors found.
        </div>
      )}
    </div>
  );
}

export default Doctors;