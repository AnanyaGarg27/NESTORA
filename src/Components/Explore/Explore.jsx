import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Explore.css";

function Explore() {
  const { roomName } = useParams();

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);

      try {
        const query = `${roomName} interior design`;

        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            query
          )}&per_page=12`,
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API_KEY,
            },
          }
        );

        const data = await response.json();

        setPhotos(data.photos || []);
      } catch (error) {
        console.error("Error fetching Pexels images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [roomName]);

  return (
    <section className="explore-page">

      <div className="explore-heading">
        <p>EXPLORE SPACES</p>

        <h1>
          {roomName} <span>Inspiration</span>
        </h1>

        <p>
          Discover beautiful {roomName.toLowerCase()} designs
          and find inspiration for your space.
        </p>
      </div>

      {loading ? (
        <p className="loading-text">
          Loading {roomName} designs...
        </p>
      ) : (
        <div className="explore-grid">

          {photos.map((photo) => (
            <div className="explore-card" key={photo.id}>

              <img
                src={photo.src.large}
                alt={photo.alt || `${roomName} interior design`}
              />

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default Explore;