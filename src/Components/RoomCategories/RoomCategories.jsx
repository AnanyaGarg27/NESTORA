import "./RoomCategories.css";
import { useNavigate } from "react-router-dom";
function RoomCategories() {
  const navigate = useNavigate();

  const rooms = [
    {
      name: "Living Room",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Dining Room",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Home Office",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bathroom",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="room-categories" id="gallery">

      <div className="room-heading">

        <p className="small-heading">
          EXPLORE SPACES
        </p>

        <h2>
          Find Inspiration for
          <span> Every Room</span>
        </h2>

        <p className="room-description">
          Discover beautiful ideas and create spaces
          that truly feel like you.
        </p>

      </div>


      <div className="room-grid">

        {rooms.map((room, index) => (

          <div className="room-card" key={index}>

            <img
              src={room.image}
              alt={room.name}
            />

            
            <div className="room-overlay">

              <h3>{room.name}</h3>

              <span
                onClick={() =>
                  navigate(`/explore/${encodeURIComponent(room.name)}`)
                }
              >
                Explore →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RoomCategories;
