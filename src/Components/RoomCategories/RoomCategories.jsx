import "./RoomCategories.css";
import { useNavigate } from "react-router-dom";
function RoomCategories() {
  const navigate = useNavigate();

  const rooms = [
    {
      name: "Living Room",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsP0vs_3TC4PmoI_XWyo9l1EUHN9tAZgF8H2OiVDjmbA&s=10"
    },
    {
      name: "Bedroom",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjpUb0H_OHUjMtV6rUqoyZhYLUNkwDwFXwaem6Lbisw&s=10"
    },
    {
      name: "Kitchen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpYukEZhvD-3lsKqbec_z-RjQKTGH1bo2VTYZkBCuag&s=10"
    },
    {
      name: "Dining Room",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKv36B6VG0zARDrYrkzo1G_2z9TkKD03AfDSNAhu5tsg&s=10"
    },
    {
      name: "Home Office",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtgZ_t0v8xZYvDbR3dxvRYgJ05tq3_KeY3BSXsSXitQ&s=10"
    },
    {
      name: "Bathroom",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RR8Ie1o0zAFOiLp0iz-iomfeqLNSOpfcQEEAdmy8bA&s=10"
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

            {/* <div className="room-overlay">

              <h3>{room.name}</h3>

              <span>
                Explore →
              </span>

            </div> */}
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