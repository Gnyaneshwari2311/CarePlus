import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-icon">👨‍⚕️</div>

      <h3>{doctor.name}</h3>

      <p className="specialization">
        {doctor.specialization}
      </p>

      <p>⭐ {doctor.rating}</p>

      <Link
        to={`/doctors/${doctor.id}`}
        className="small-button"
      >
        View Details
      </Link>
    </div>
  );
}

export default DoctorCard;