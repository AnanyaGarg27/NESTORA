import React from "react";
import { Link } from "react-router-dom";
import "./RoomDesigner.css";

function RoomDesigner() {
  return (
    <div className="designer-page">

      {/* Top Header */}
      <header className="designer-header">

    {/* LOGO — SAME AS NAVBAR */}
   <Link to="/" className="logo">
    <div className="nestora-mark">
        <span className="mark-left"></span>
        <span className="mark-right"></span>
    </div>

    <span className="logo-text">
        Nestora
    </span>
</Link>


    {/* PAGE TITLE */}
    <h1>
        Living Room Designer
    </h1>


    {/* SAVE BUTTON */}
    <button className="save-design-btn">
        Save Design
    </button>

</header>
  


      {/* Main Designer */}
      <div className="designer-layout">

        {/* Left Panel */}
        <aside className="left-panel">

          <h3>Room Settings</h3>

          <div className="setting-box">

            <label>Room Size</label>

            <div className="room-size">

              <input
                type="number"
                defaultValue="12"
              />

              <span>ft</span>

              <span>×</span>

              <input
                type="number"
                defaultValue="15"
              />

              <span>ft</span>

            </div>

          </div>


          <div className="setting-box">

            <label>Wall Color</label>

            <div className="color-options">

              <button className="color white"></button>

              <button className="color beige"></button>

              <button className="color grey"></button>

              <button className="color blue"></button>

              <button className="color green"></button>

            </div>

          </div>


          <div className="setting-box">

            <label>Flooring</label>

            <select>

              <option>Wood</option>
              <option>Marble</option>
              <option>Tiles</option>
              <option>Carpet</option>

            </select>

          </div>

        </aside>


        {/* CENTER */}
        <main className="canvas-area">

          <div className="canvas-header">

            <h2>Your Room</h2>

            <span>
              12 ft × 15 ft
            </span>

          </div>


          {/* ROOM CANVAS */}
          <div className="room-canvas">

            <div className="room-wall">

              <div className="room-label">
                Your Room
              </div>

            </div>

          </div>

        </main>


        {/* RIGHT PANEL */}
        <aside className="right-panel">

          <h3>Furniture</h3>

          <p className="panel-description">
            Add furniture to your room
          </p>

        </aside>

      </div>

    </div>
  );
}

export default RoomDesigner;