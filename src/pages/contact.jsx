function Contact() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We are here to help you</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <span>📍</span>
          <h3>Address</h3>
          <p>MG Road, Bangalore, Karnataka</p>
        </div>

        <div className="contact-card">
          <span>📞</span>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <span>✉️</span>
          <h3>Email</h3>
          <p>care@careplus.com</p>
        </div>

        <div className="contact-card">
          <span>🕐</span>
          <h3>Emergency</h3>
          <p>Available 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;