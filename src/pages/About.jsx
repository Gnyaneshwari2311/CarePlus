function About() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>About CarePlus</h1>
        <p>Healthcare built around people</p>
      </div>

      <section className="content-section">
        <h2>Who We Are</h2>

        <p>
          CarePlus Hospital is a modern healthcare center
          focused on providing quality medical services in a
          safe and comfortable environment.
        </p>

        <p>
          Our team of experienced doctors, nurses and
          healthcare professionals works together to provide
          personalized care for every patient.
        </p>

        <div className="stats">
          <div>
            <strong>15+</strong>
            <span>Departments</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Doctors</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>Patients</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;