import React, { useState } from "react";
import "./Premiumpage.css";

const Premiumpage = ({ isVisible, onClose,onUpgrade }) => {

  const [isAnnual, setIsAnnual] = useState(true);

  // =====================================
  // UPGRADE TO PREMIUM
  // =====================================

  const handleUpgrade = () => {

    // Save Premium status
    localStorage.setItem("isPremium", "true");

    // Close popup
    onClose();

    // Demo success message
    alert("🎉 Premium activated successfully!");
  };


  // =====================================
  // DON'T SHOW POPUP
  // =====================================

  if (!isVisible) {
    return null;
  }


  return (
    <div
      className="popup-3d-overlay"
      onClick={onClose}
    >

      <div
        className="popup-3d-card"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ==============================
            CLOSE BUTTON
        ============================== */}

        <button
          className="popup-close-btn"
          onClick={onClose}
          aria-label="Close Premium popup"
        >
          ✕
        </button>


        {/* ==============================
            HEADER
        ============================== */}

        <div className="popup-header">

          <span className="pro-badge">
            ✨ NESTORA PRO
          </span>

          <h2>
            Unlock Premium Design Power
          </h2>

          <p>
            Get access to powerful AI tools that make
            designing your dream space easier, smarter
            and more personalized.
          </p>

        </div>


        {/* ==============================
            BILLING SWITCH
        ============================== */}

        <div className="popup-billing-switch">

          <span className={!isAnnual ? "active" : ""}>
            Monthly
          </span>

          <button
            className={`switch-track ${
              isAnnual ? "annual" : ""
            }`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className="switch-thumb"></span>
          </button>

          <span className={isAnnual ? "active" : ""}>
            Annual{" "}

            <span className="discount-tag">
              20% OFF
            </span>
          </span>

        </div>


        {/* ==============================
            PREMIUM PLAN
        ============================== */}

        <div className="popup-plan-box">

          <div className="plan-details">

            <h3>
              Pro Pass
            </h3>

            <div className="price-tag">

              <span className="currency">
                ₹
              </span>

              <span className="price-amount">
                {isAnnual ? "4999" : "499"}
              </span>

              <span className="per-month">
                /mo
              </span>

            </div>

          </div>


          {/* ==============================
              PREMIUM FEATURES
          ============================== */}

          <ul className="popup-feature-list">

            <li>
              <span className="check">
                ✓
              </span>
              AI Design Assistant
            </li>

            <li>
              <span className="check">
                ✓
              </span>
              Smart Budget Planner
            </li>

            <li>
              <span className="check">
                ✓
              </span>
              AI Colour Suggestions
            </li>

          </ul>


          {/* ==============================
              UPGRADE BUTTON
          ============================== */}

          <button
  className="popup-cta-btn"
  onClick={() => {
    localStorage.setItem("isPremium", "true");

    if (onUpgrade) {
      onUpgrade();
    }
  }}
>
  Upgrade Now
</button>

        </div>

      </div>

    </div>
  );
};

export default Premiumpage;