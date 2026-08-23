import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Premiumpage from "../Premium Page/Premiumpage";
import "./Features.css";

const Features = () => {

  const navigate = useNavigate();

  // Premium popup
  const [showPremium, setShowPremium] = useState(false);

  // Keep Premium status inside React state
  // so UI updates immediately after purchase
  const [isPremium, setIsPremium] = useState(
    localStorage.getItem("isPremium") === "true"
  );


  // =====================================
  // OPEN PREMIUM POPUP
  // =====================================

  const openPremium = () => {
    setShowPremium(true);
  };


  // =====================================
  // CLOSE PREMIUM POPUP
  // =====================================

  const closePremium = () => {
    setShowPremium(false);
  };


  // =====================================
  // AFTER PREMIUM PURCHASE
  // =====================================

  const handlePremiumSuccess = () => {

    // Save Premium status
    localStorage.setItem("isPremium", "true");

    // Update UI immediately
    setIsPremium(true);

    // Close popup
    setShowPremium(false);
  };


  // =====================================
  // OPEN FEATURE
  // =====================================

  const handleFeatureClick = (feature) => {

    // If user is not Premium,
    // show Premium popup
    if (!isPremium) {
      setShowPremium(true);
      return;
    }


    // Premium user can access features

    if (feature === "design") {
      navigate("/ai-design-assistant");
    }

    if (feature === "budget") {
      navigate("/smart-budget-planner");
    }

    if (feature === "color") {
      navigate("/ai-colour-suggestions");
    }
  };


  return (
    <>
      <section className="features-page">

        {/* =================================
            HEADER
        ================================= */}

        <div className="features-header">

          <span className="features-tag">
            ✦ NESTORA PREMIUM
          </span>

          <h1>
            Design Smarter with AI
          </h1>

          <p>
            Powerful AI tools to help you plan,
            personalize and create your perfect space.
          </p>

        </div>


        {/* =================================
            FEATURE CARDS
        ================================= */}

        <div className="features-container">


          {/* =================================
              AI DESIGN ASSISTANT
          ================================= */}

          <div
            className="feature-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80')"
            }}
          >

            <div className="feature-overlay"></div>

            <div className="feature-content">

              <div className="feature-icon">
                ✨
              </div>

              <h2>
                AI Design Assistant
              </h2>

              <p>
                Get personalized interior design ideas,
                layouts and recommendations based on
                your room and style.
              </p>

              <span className="premium-label">
                ✦ PREMIUM
              </span>

              {isPremium && (
                <button
                  className="feature-open-btn"
                  onClick={() =>
                    handleFeatureClick("design")
                  }
                >
                  Open Feature
                </button>
              )}

            </div>

          </div>


          {/* =================================
              SMART BUDGET PLANNER
          ================================= */}

          <div
            className="feature-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80')"
            }}
          >

            <div className="feature-overlay"></div>

            <div className="feature-content">

              <div className="feature-icon">
                💰
              </div>

              <h2>
                Smart Budget Planner
              </h2>

              <p>
                Plan your interior budget, estimate
                expenses and keep track of your
                furniture and decoration costs.
              </p>

              <span className="premium-label">
                ✦ PREMIUM
              </span>

              {isPremium && (
                <button
                  className="feature-open-btn"
                  onClick={() =>
                    handleFeatureClick("budget")
                  }
                >
                  Open Feature
                </button>
              )}

            </div>

          </div>


          {/* =================================
              AI COLOUR SUGGESTIONS
          ================================= */}

          <div
            className="feature-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80')"
            }}
          >

            <div className="feature-overlay"></div>

            <div className="feature-content">

              <div className="feature-icon">
                🎨
              </div>

              <h2>
                AI Colour Suggestions
              </h2>

              <p>
                Discover beautiful colour combinations
                that match your room, furniture and
                preferred interior style.
              </p>

              <span className="premium-label">
                ✦ PREMIUM
              </span>

              {isPremium && (
                <button
                  className="feature-open-btn"
                  onClick={() =>
                    handleFeatureClick("color")
                  }
                >
                  Open Feature
                </button>
              )}

            </div>

          </div>

        </div>


        {/* =================================
            ONE PREMIUM BUTTON
        ================================= */}

        <div className="premium-action">

          {!isPremium ? (
            <>
              <p>
                Unlock all three AI-powered design tools
                with Nestora Premium.
              </p>

              <button
                className="main-premium-btn"
                onClick={openPremium}
              >
                ✦ Unlock Nestora Premium
              </button>
            </>
          ) : (
            <>
              <div className="premium-active">
                ✓ Nestora Premium Active
              </div>

              <p>
                All AI-powered design tools are now unlocked.
              </p>
            </>
          )}

        </div>

      </section>


      {/* =================================
          PREMIUM POPUP
      ================================= */}

      <Premiumpage
        isVisible={showPremium}
        onClose={closePremium}
        onUpgrade={handlePremiumSuccess}
      />

    </>
  );
};

export default Features;