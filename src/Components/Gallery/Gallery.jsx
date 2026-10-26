import React, { useContext, useState } from "react";
import { PreferencesContext } from "../../PreferencesContext";
import "./Gallery.css";

const designs = [
  { id: 1, title: "Warm Luxury Bedroom", room: "Bedroom", style: "Modern Luxury", colors: "Warm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkyrfFGWwbD_OAs8UM_601uleO1a-AVb0XRIYipuVKg&s=10" },
  { id: 2, title: "Minimal Bedroom", room: "Bedroom", style: "Warm Minimalism", colors: "Neutral", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Scandinavian Bedroom", room: "Bedroom", style: "Scandinavian", colors: "Cool", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Earthy Bedroom", room: "Bedroom", style: "Boho Chic", colors: "Earthy", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Luxury Living Room", room: "Living Room", style: "Modern Luxury", colors: "Warm", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Neutral Living Room", room: "Living Room", style: "Warm Minimalism", colors: "Neutral", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
  { id: 7, title: "Modern Living Room", room: "Living Room", style: "Contemporary", colors: "Cool", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80" },
  { id: 8, title: "Earthy Boho Lounge", room: "Living Room", style: "Boho Chic", colors: "Earthy", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80" },
  { id: 9, title: "Modern Luxury Kitchen", room: "Kitchen", style: "Modern Luxury", colors: "Dark", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tltPKtUjPxT_o5hGJEqOQSDLyR2M1VZsDyGFmzyq_Q&s=10" },
  { id: 10, title: "Minimal Kitchen", room: "Kitchen", style: "Warm Minimalism", colors: "Neutral", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnVkMHE8KR3onXRQ1WbDEhP27-6dJIJn5na_F6js4SQ&s=10" },
  { id: 11, title: "Contemporary Kitchen", room: "Kitchen", style: "Contemporary", colors: "Bright", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGceB_fdpIh-MEVFVLAGqfDF51rDJ6c_WRy6KPzc5TQ&s=10" },
  { id: 12, title: "Scandinavian Kitchen", room: "Kitchen", style: "Scandinavian", colors: "Cool", image: "https://www.thespruce.com/thmb/_SxqkHK-li-qgYxxHiMZWuEBdH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LindyeGallowayStudioShop_Credit_ChadMellon_101-33c501fc735d4e329429ea54dd1acc31.jpeg" },
  { id: 13, title: "Creative Home Office", room: "Home Office", style: "Contemporary", colors: "Bright", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" },
  { id: 14, title: "Minimal Home Office", room: "Home Office", style: "Warm Minimalism", colors: "Neutral", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" },
  { id: 15, title: "Luxury Home Office", room: "Home Office", style: "Modern Luxury", colors: "Dark", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { id: 16, title: "Elegant Bathroom", room: "Bathroom", style: "Modern Luxury", colors: "Neutral", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80" },
  { id: 17, title: "Minimal Bathroom", room: "Bathroom", style: "Warm Minimalism", colors: "Cool", image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=800&q=80" },
  { id: 18, title: "Modern Dining Room", room: "Dining Room", style: "Contemporary", colors: "Warm", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" },
];

function Gallery() {
  const { preferences } = useContext(PreferencesContext);
  const [search, setSearch] = useState("");

  const saved = JSON.parse(localStorage.getItem("nestoraPreferences") || "null");
  const selected = saved || preferences || {};

  const matchingDesigns = designs.filter((d) => {
    const matchRoom = !selected.room || d.room.toLowerCase() === selected.room.toLowerCase();
    const matchStyle = !selected.style || d.style.toLowerCase() === selected.style.toLowerCase();
    const matchColor = !selected.color || d.colors.toLowerCase() === selected.color.toLowerCase();
    return matchRoom && matchStyle && matchColor;
  });

  const filteredDesigns = (
    matchingDesigns.length ? matchingDesigns : designs.filter((d) =>
      (!selected.room || d.room.toLowerCase() === selected.room.toLowerCase()) &&
      (!selected.style || d.style.toLowerCase() === selected.style.toLowerCase())
    )
  ).filter((d) =>
    `${d.title} ${d.room} ${d.style} ${d.colors}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <p className="gallery-subtitle">YOUR PERSONAL DESIGN COLLECTION</p>
        <h1>Explore Your Style</h1>
        <p>Discover beautiful spaces selected for your taste.</p>
      </header>

      <div className="gallery-toolbar">
        <input
          className="gallery-search"
          type="text"
          placeholder="Search designs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="gallery-grid">
        {filteredDesigns.map((design) => (
          <div className="gallery-card" key={design.id}>
            <img src={design.image} alt={design.title} />
            <div className="gallery-card-content">
              <span>{design.room}</span>
              <h3>{design.title}</h3>
              <p>{design.style} · {design.colors} tones</p>
              <button
                className="use-design-btn"
                onClick={() => {
                  localStorage.setItem("nestoraSelectedDesign", JSON.stringify(design));
                  window.location.href = "/room-designer";
                }}
              >
                Use This Design
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDesigns.length === 0 && (
        <div className="no-results">
          <h3>No designs found</h3>
          <p>Try searching for another design.</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;