import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Healthcare services for your needs</p>
      </div>

      <div className="service-menu">
        <Link to="/services/general-medicine">
          General Medicine
        </Link>

        <Link to="/services/cardiology">
          Cardiology
        </Link>

        <Link to="/services/pediatrics">
          Pediatrics
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;