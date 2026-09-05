import { Link } from "react-router-dom";

function Home() {
  const hospitalImage =
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3";

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO CAREPLUS</p>

          <h1>
            Quality Healthcare
            <br />
            You Can Trust
          </h1>

          <p>
            CarePlus Hospital provides reliable healthcare
            services with experienced doctors, modern
            facilities and patient-friendly care.
          </p>

          <div className="hero-buttons">
            <Link
              to="/appointments"
              className="primary-button"
            >
              Book Appointment
            </Link>

            <Link
              to="/doctors"
              className="secondary-button"
            >
              Meet Our Doctors
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={hospitalImage}
            alt="Modern hospital"
          />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose CarePlus?</h2>

        <p className="section-text">
          We are committed to providing safe, reliable and
          comfortable healthcare for every patient.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <span>👨‍⚕️</span>
            <h3>Experienced Doctors</h3>
            <p>
              Experienced healthcare professionals dedicated
              to your health.
            </p>
          </div>

          <div className="feature-card">
            <span>🏥</span>
            <h3>Modern Facilities</h3>
            <p>
              Modern facilities designed to provide better
              patient care.
            </p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Patient First</h3>
            <p>
              Your comfort, safety and well-being are our
              highest priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="home-banner">
        <div>
          <h2>Your Health Matters to Us</h2>
          <p>
            Get professional healthcare whenever you need it.
          </p>
        </div>

        <Link
          to="/appointments"
          className="primary-button"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}

export default Home;