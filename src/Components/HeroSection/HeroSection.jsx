import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
    return (
        <section className="hero">

            {/* LEFT SIDE */}
            <div className="hero-content">

                <p className="hero-tag">
                    ✦ INTERIOR DESIGN MADE SIMPLE
                </p>

                <h1>
                    Design a Space
                    <br />
                    That Feels Like
                    <span> Home.</span>
                </h1>

                <p className="hero-description">
                    Create beautiful rooms that match your style,
                    personality, and lifestyle. Explore inspiring
                    designs or start creating your own dream space.
                </p>

                {/* BUTTONS */}
                <div className="hero-buttons">

                    

                    <Link
                        to="/gallery"
                        className="explore-rooms"
                    >
                        Explore Rooms
                    </Link>

                </div>

            </div>


            {/* RIGHT SIDE - YOUR ORIGINAL IMAGE */}
            <div className="hero-image-container">

                <img
                    src="https://i.pinimg.com/originals/8b/fe/15/8bfe151eb66146414f2524bd116d8146.jpg"
                    alt="Beautiful interior room"
                    className="hero-image"
                />

                {/* Floating card */}
                <div className="hero-floating-card">

                    <div className="floating-icon">
                        ✦
                    </div>

                    <div>
                        <strong>Design Your Dream Space</strong>
                        <p>Start creating today</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;