import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-tagline">
            WELCOME TO NESTORA
          </p>

          <h1>
            Designing Spaces
            <span> That Feel Like Home.</span>
          </h1>

          <p>
            Nestora is a modern interior design platform created to
            make designing your dream space simple, inspiring and
            personal.
          </p>

        </div>

      </section>


      {/* ABOUT NESTORA */}
      <section className="about-section">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
            alt="Modern living room"
          />
        </div>

        <div className="about-text">

          <p className="section-label">
            WHO WE ARE
          </p>

          <h2>
            Where Creativity
            <span> Meets Your Space.</span>
          </h2>

          <p>
            Nestora brings interior design ideas, inspiration and
            technology together in one simple platform.
          </p>

          <p>
            Whether you are redesigning your bedroom, planning your
            living room or simply exploring new styles, Nestora helps
            you turn your ideas into beautiful spaces.
          </p>

        </div>

      </section>


      {/* WHAT WE OFFER */}
      <section className="about-offer">

        <p className="section-label">
          WHAT WE OFFER
        </p>

        <h2>
          Everything You Need
          <span> To Create.</span>
        </h2>

        <div className="about-features">

          {/* CARD 1 */}
          <div className="about-feature-card">

            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
                alt="Interior design"
              />
            </div>

            <div className="feature-content">

              <h3>Creative Design</h3>

              <p>
                Explore different styles and create spaces that
                represent your personality.
              </p>

            </div>

          </div>


          {/* CARD 2 */}
          <div className="about-feature-card">

            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
                alt="Interior inspiration"
              />
            </div>

            <div className="feature-content">

              <h3>Design Inspiration</h3>

              <p>
                Discover beautiful ideas and inspiration for every
                corner of your home.
              </p>

            </div>

          </div>


          {/* CARD 3 */}
          <div className="about-feature-card">

            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
                alt="Room planning"
              />
            </div>

            <div className="feature-content">

              <h3>Smart Planning</h3>

              <p>
                Plan your rooms and experiment with different
                layouts before bringing them to life.
              </p>

            </div>

          </div>


          {/* CARD 4 */}
          <div className="about-feature-card">

            <div className="feature-image">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
                alt="Beautiful home interior"
              />
            </div>

            <div className="feature-content">

              <h3>Your Personal Style</h3>

              <p>
                Create interiors that feel unique, comfortable and
                truly yours.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* OUR MISSION */}
      <section className="about-mission">

        <div className="mission-image">

          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80"
            alt="Elegant interior"
          />

        </div>

        <div className="mission-text">

          <p className="section-label">
            OUR MISSION
          </p>

          <h2>
            Your Home Should Tell
            <span> Your Story.</span>
          </h2>

          <p>
            We believe interior design should be accessible,
            enjoyable and personal.
          </p>

          <p>
            Nestora helps you experiment with ideas, discover your
            style and create spaces where you genuinely feel at home.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;