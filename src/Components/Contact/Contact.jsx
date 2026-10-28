import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's Create Something
            <span> Beautiful Together.</span>
          </h1>

          <p>
            Have a question, suggestion or simply want to talk
            about your next space? We'd love to hear from you.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT INFORMATION
      ========================= */}

      <section className="contact-info-section">

        <div className="contact-info-card">

          <div className="contact-icon">
            ✉
          </div>

          <h3>Email Us</h3>

          <p>
            hello@nestora.com
          </p>

          <a href="mailto:hello@nestora.com">
            Send an Email →
          </a>

        </div>


        <div className="contact-info-card">

          <div className="contact-icon">
            ☎
          </div>

          <h3>Call Us</h3>

          <p>
            +91 XXXXX XXXXX
          </p>

          <a href="tel:+919876543210">
            Call Nestora →
          </a>

        </div>


        <div className="contact-info-card">

          <div className="contact-icon">
            ⌖
          </div>

          <h3>Our Location</h3>

          <p>
            Punjab, India
          </p>

          <span>
            Visit Us →
          </span>

        </div>

      </section>


      {/* =========================
          CONTACT FORM
      ========================= */}

      <section className="contact-form-section">

        <div className="contact-form-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-form-intro">

            <p className="contact-label">
              SEND A MESSAGE
            </p>

            <h2>
              We'd Love To
              <span> Hear From You.</span>
            </h2>

            <p>
              Whether you need help with your design, have feedback
              about Nestora, or simply want to share an idea, send
              us a message.
            </p>

            <div className="contact-decoration">
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>


          {/* RIGHT SIDE */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="What would you like to talk about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your idea..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit-button"
            >
              Send Message →
            </button>


            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been received.
              </div>
            )}

          </form>

        </div>

      </section>


      {/* =========================
          HOW CAN WE HELP
      ========================= */}

      <section className="help-section">

        <p className="contact-label">
          HOW CAN WE HELP?
        </p>

        <h2>
          What Can We Help You With?
        </h2>

        <div className="help-options">

          <div className="help-card">
            <h3>Design Assistance</h3>
            <p>
              Need help planning your perfect space?
            </p>
          </div>

          <div className="help-card">
            <h3>Room Ideas</h3>
            <p>
              Looking for inspiration for your next room?
            </p>
          </div>

          <div className="help-card">
            <h3>Technical Support</h3>
            <p>
              Having trouble using any Nestora feature?
            </p>
          </div>

          <div className="help-card">
            <h3>Feedback</h3>
            <p>
              Have an idea that could make Nestora better?
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          FAQ
      ========================= */}

      <section className="faq-section">

        <div className="faq-heading">

          <p className="contact-label">
            FAQ
          </p>

          <h2>
            Frequently Asked Questions
          </h2>

        </div>


        <div className="faq-list">

          <details>
            <summary>
              Can I save my designs?
            </summary>

            <p>
              Yes. Nestora allows you to save your designs so
              you can access them later.
            </p>
          </details>


          <details>
            <summary>
              Can I design different rooms?
            </summary>

            <p>
              Yes. You can explore different room categories and
              create designs according to your needs.
            </p>
          </details>


          <details>
            <summary>
              Can I get AI-based design suggestions?
            </summary>

            <p>
              Nestora can provide AI-powered suggestions for
              colours, layouts, furniture and interior styles.
            </p>
          </details>


          <details>
            <summary>
              Is Nestora suitable for beginners?
            </summary>

            <p>
              Absolutely. Nestora is designed to make interior
              design simple and easy to explore.
            </p>
          </details>

        </div>

      </section>


      {/* =========================
          FINAL MESSAGE
      ========================= */}

      <section className="contact-final">

        <h2>
          Your Ideas Deserve
          <span> A Beautiful Space.</span>
        </h2>

        <p>
          Start with an idea. We'll help you turn it into a space
          you'll love.
        </p>

      </section>

    </div>
  );
}

export default Contact;