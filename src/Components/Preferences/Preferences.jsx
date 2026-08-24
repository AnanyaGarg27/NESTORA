import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Preferences.css";

function Preferences() {

  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    room: "Bedroom",
    style: "Modern Luxury",
    color: "Warm",
    budget: "₹1L - ₹3L"
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedPreferences = localStorage.getItem("nestoraPreferences");

    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleSelect = (category, value) => {
    setPreferences({
      ...preferences,
      [category]: value
    });

    setSaved(false);
  };

  const savePreferences = () => {
    localStorage.setItem(
      "nestoraPreferences",
      JSON.stringify(preferences)
    );

    setSaved(true);
    navigate("/gallery");
  };
  const clearPreferences = () => {
    localStorage.removeItem("nestoraPreferences");

    setPreferences({
      room: "",
      style: "",
      color: "",
      budget: ""
    });

    setSaved(false);
  };

  return (
    <div className="preferences-page">

      {/* HEADER */}

      <section className="preferences-header">

        <div className="preferences-heading">

          <p className="preferences-overline">
            NESTORA / PREFERENCES
          </p>

          <h1>
            Choose what feels <span>like you.</span>
          </h1>

          <p>
            Tell us a little about your space and your style.
            We'll use these choices to personalize your experience.
          </p>

        </div>

      </section>


      {/* PREFERENCES CARD */}

      <section className="preferences-section">

        <div className="preferences-card">


          {/* ROOM */}

          <div className="preference-group">

            <div className="preference-title">

              <span className="preference-number">
                01
              </span>

              <div>
                <h2>What are you designing?</h2>
                <p>Choose the room you want to work on.</p>
              </div>

            </div>


            <div className="preference-options">

              {[
                "Living Room",
                "Bedroom",
                "Kitchen",
                "Home Office",
                "Bathroom",
                "Dining Room"
              ].map((item) => (

                <button
                  key={item}
                  className={
                    preferences.room === item
                      ? "preference-option selected"
                      : "preference-option"
                  }
                  onClick={() => handleSelect("room", item)}
                >
                  {item}

                  {preferences.room === item && (
                    <span className="check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

          </div>


          <div className="preference-divider"></div>


          {/* STYLE */}

          <div className="preference-group">

            <div className="preference-title">

              <span className="preference-number">
                02
              </span>

              <div>
                <h2>What style speaks to you?</h2>
                <p>Pick the look you naturally gravitate towards.</p>
              </div>

            </div>


            <div className="preference-options">

              {[
                "Modern Luxury",
                "Warm Minimalism",
                "Scandinavian",
                "Boho Chic",
                "Traditional",
                "Contemporary"
              ].map((item) => (

                <button
                  key={item}
                  className={
                    preferences.style === item
                      ? "preference-option selected"
                      : "preference-option"
                  }
                  onClick={() => handleSelect("style", item)}
                >
                  {item}

                  {preferences.style === item && (
                    <span className="check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

          </div>


          <div className="preference-divider"></div>


          {/* COLOR */}

          <div className="preference-group">

            <div className="preference-title">

              <span className="preference-number">
                03
              </span>

              <div>
                <h2>Which colours feel right?</h2>
                <p>Choose the overall mood for your space.</p>
              </div>

            </div>


            <div className="preference-options">

              {[
                "Neutral",
                "Warm",
                "Cool",
                "Earthy",
                "Dark",
                "Bright"
              ].map((item) => (

                <button
                  key={item}
                  className={
                    preferences.color === item
                      ? "preference-option selected"
                      : "preference-option"
                  }
                  onClick={() => handleSelect("color", item)}
                >
                  {item}

                  {preferences.color === item && (
                    <span className="check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

          </div>


          <div className="preference-divider"></div>


          {/* BUDGET */}

          <div className="preference-group">

            <div className="preference-title">

              <span className="preference-number">
                04
              </span>

              <div>
                <h2>What's your budget?</h2>
                <p>This helps us suggest practical design ideas.</p>
              </div>

            </div>


            <div className="preference-options">

              {[
                "Under ₹50K",
                "₹50K - ₹1L",
                "₹1L - ₹3L",
                "₹3L - ₹5L",
                "₹5L+"
              ].map((item) => (

                <button
                  key={item}
                  className={
                    preferences.budget === item
                      ? "preference-option selected"
                      : "preference-option"
                  }
                  onClick={() => handleSelect("budget", item)}
                >
                  {item}

                  {preferences.budget === item && (
                    <span className="check">
                      ✓
                    </span>
                  )}

                </button>

              ))}

            </div>

          </div>


          

          <div className="preferences-save-area">

            <div className="preferences-note">
              <span>✦</span>

              <p>
                Your choices are saved on this device and can
                be changed anytime.
              </p>
            </div>

            <div className="preferences-buttons">

              <button
                className="clear-preferences"
                onClick={clearPreferences}
              >
                Clear Preferences
              </button>

              <button
                className="save-preferences"
                onClick={savePreferences}
              >
                {saved ? "Preferences Saved ✓" : "Save Preferences →"}
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Preferences;
