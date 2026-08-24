import "./CTAsection.css";

function CTASection() {
  return (
    <section className="cta-section">

      {/* Left Content */}
      <div className="cta-content">

        <p className="cta-label">
          YOUR SPACE AWAITS
        </p>

        <h2>
          Turn Your Ideas
          <br />
          Into <span>Beautiful Spaces.</span>
        </h2>

        <p className="cta-description">
          Start exploring inspiring interiors and
          discover the perfect style for your space.
        </p>

      </div>

      {/* Right Image */}
      <div className="cta-image">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"
          alt="Elegant interior design"
        />

        <div className="cta-image-text">
          <span>INSPIRED LIVING</span>
          <p>Designed for you.</p>
        </div>

      </div>

    </section>
  );
}

export default CTASection;