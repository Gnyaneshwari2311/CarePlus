import { Link, useParams } from "react-router-dom";

function DoctorDetails() {
  const { id } = useParams();

  const doctors = {
    1: {
      name: "Dr. Rahul Sharma",
      specialization: "Cardiologist",
      experience: "12 Years",
      rating: "4.8"
    },

    2: {
      name: "Dr. Priya Rao",
      specialization: "Pediatrician",
      experience: "10 Years",
      rating: "4.9"
    },

    3: {
      name: "Dr. Ananya Patel",
      specialization: "General Physician",
      experience: "8 Years",
      rating: "4.7"
    },

    4: {
      name: "Dr. Arjun Kumar",
      specialization: "Neurologist",
      experience: "11 Years",
      rating: "4.8"
    }
  };

  const doctor = doctors[id];

  if (!doctor) {
    return (
      <div className="page">
        <h2>Doctor not found</h2>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="doctor-detail">
        <div className="large-doctor-icon">👨‍⚕️</div>

        <h1>{doctor.name}</h1>

        <h3>{doctor.specialization}</h3>

        <p>
          <strong>Experience:</strong>{" "}
          {doctor.experience}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {doctor.rating}
        </p>

        <p>
          This doctor provides professional medical care
          with a patient-focused approach.
        </p>

        <Link
          to="/appointments"
          className="primary-button"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorDetails;