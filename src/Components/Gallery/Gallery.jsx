import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

function Gallery() {

    
    // SAVED PREFERENCES
    

    const [preferences] = useState(() => {

        const savedPreferences =
            localStorage.getItem("nestoraPreferences");

        return savedPreferences
            ? JSON.parse(savedPreferences)
            : null;
    });


    
    // SELECTED ROOM CATEGORY
    

    const [selectedCategory, setSelectedCategory] = useState(() => {

        const savedPreferences =
            localStorage.getItem("nestoraPreferences");

        if (savedPreferences) {

            const data = JSON.parse(savedPreferences);

            return data.room;

        }

        return "All";
    });



    // SEARCH
    

    const [search, setSearch] = useState("");


    // =========================
    // FAVORITES
    // =========================

    const [favorites, setFavorites] = useState(() => {

        const savedFavorites =
            localStorage.getItem("nestoraFavorites");

        return savedFavorites
            ? JSON.parse(savedFavorites)
            : [];
    });


    const [showFavorites, setShowFavorites] = useState(false);


    
    // SAVE FAVORITES
    

    useEffect(() => {

        localStorage.setItem(
            "nestoraFavorites",
            JSON.stringify(favorites)
        );

    }, [favorites]);


    
    // GALLERY DESIGNS
    

    const designs = [

        {
            id: 1,
            title: "Modern Living Room",
            room: "Living Room",
            style: "Modern",
            colors: "Beige • White • Wood",
            image:
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 2,
            title: "Cozy Minimal Bedroom",
            room: "Bedroom",
            style: "Minimal",
            colors: "Cream • Beige • Brown",
            image:
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 3,
            title: "Contemporary Kitchen",
            room: "Kitchen",
            style: "Contemporary",
            colors: "White • Grey • Wood",
            image:
                "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 4,
            title: "Elegant Dining Space",
            room: "Dining Room",
            style: "Elegant",
            colors: "Brown • Cream • Gold",
            image:
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 5,
            title: "Creative Home Office",
            room: "Home Office",
            style: "Modern",
            colors: "White • Wood • Green",
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 6,
            title: "Luxury Bathroom",
            room: "Bathroom",
            style: "Luxury",
            colors: "White • Marble • Grey",
            image:
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 7,
            title: "Warm Scandinavian Bedroom",
            room: "Bedroom",
            style: "Scandinavian",
            colors: "White • Wood • Beige",
            image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
        },

        {
            id: 8,
            title: "Luxury Modern Living Room",
            room: "Living Room",
            style: "Luxury",
            colors: "Grey • Black • Gold",
            image:
                "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
        }

    ];


    
    // TOGGLE FAVORITE
    

    const toggleFavorite = (id) => {

        setFavorites((prevFavorites) => {

            if (prevFavorites.includes(id)) {

                return prevFavorites.filter(
                    (favoriteId) => favoriteId !== id
                );

            }

            return [
                ...prevFavorites,
                id
            ];

        });

    };


    
    // STYLE MATCHING
    

    const styleMatches = (
        designStyle,
        selectedStyle
    ) => {

        if (!selectedStyle) {
            return true;
        }


        const styleMap = {

            "Modern Luxury": [
                "Modern",
                "Luxury"
            ],

            "Warm Minimalism": [
                "Minimal",
                "Scandinavian"
            ],

            "Scandinavian": [
                "Scandinavian"
            ],

            "Boho Chic": [
                "Boho"
            ],

            "Traditional": [
                "Traditional"
            ],

            "Contemporary": [
                "Contemporary"
            ]

        };


        const matchingStyles =
            styleMap[selectedStyle] || [];


        return matchingStyles.includes(
            designStyle
        );

    };


    
    // COLOR MATCHING
    

    const colorMatches = (
        designColors,
        selectedColor
    ) => {

        if (!selectedColor) {
            return true;
        }


        const colors =
            designColors.toLowerCase();


        // WARM

        if (selectedColor === "Warm") {

            return (
                colors.includes("beige") ||
                colors.includes("cream") ||
                colors.includes("brown") ||
                colors.includes("wood") ||
                colors.includes("gold")
            );

        }


        // COOL

        if (selectedColor === "Cool") {

            return (
                colors.includes("grey") ||
                colors.includes("gray") ||
                colors.includes("white") ||
                colors.includes("blue")
            );

        }


        // EARTHY

        if (selectedColor === "Earthy") {

            return (
                colors.includes("brown") ||
                colors.includes("wood") ||
                colors.includes("green") ||
                colors.includes("beige")
            );

        }


        // DARK

        if (selectedColor === "Dark") {

            return (
                colors.includes("black") ||
                colors.includes("grey") ||
                colors.includes("gray")
            );

        }


        // BRIGHT

        if (selectedColor === "Bright") {

            return (
                colors.includes("white") ||
                colors.includes("gold")
            );

        }


        // NEUTRAL

        if (selectedColor === "Neutral") {

            return (
                colors.includes("white") ||
                colors.includes("beige") ||
                colors.includes("grey") ||
                colors.includes("gray") ||
                colors.includes("cream")
            );

        }


        return true;

    };


    
    // FILTER DESIGNS
    

    const filteredDesigns = designs
        .filter((design) => {

            
            // ROOM FILTER
            

            const categoryMatch =
                selectedCategory === "All" ||
                design.room === selectedCategory;


            
            // SEARCH FILTER
            

            const searchMatch =
                design.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                design.style
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                design.room
                    .toLowerCase()
                    .includes(search.toLowerCase());


            
            // FAVORITES FILTER
            

            const favoriteMatch =
                !showFavorites ||
                favorites.includes(design.id);


            return (
                categoryMatch &&
                searchMatch &&
                favoriteMatch
            );

        })

        
        // SORT BY SAVED PREFERENCES
        

        .sort((a, b) => {

            if (!preferences) {
                return 0;
            }

            let scoreA = 0;
            let scoreB = 0;


            
            // STYLE SCORE
        

            if (
                styleMatches(
                    a.style,
                    preferences.style
                )
            ) {
                scoreA += 2;
            }

            if (
                styleMatches(
                    b.style,
                    preferences.style
                )
            ) {
                scoreB += 2;
            }


            
            // COLOR SCORE
            

            if (
                colorMatches(
                    a.colors,
                    preferences.color
                )
            ) {
                scoreA += 1;
            }

            if (
                colorMatches(
                    b.colors,
                    preferences.color
                )
            ) {
                scoreB += 1;
            }


            return scoreB - scoreA;
        });


    
    // PAGE
    

    return (

        <div className="gallery-page">


            {/* 
                HERO / HEADER
            */}

            <section className="gallery-header">

                <p className="gallery-small-heading">
                    NESTORA INSPIRATION
                </p>


                <h1>
                    Discover Your
                    <span> Dream Space</span>
                </h1>


                <p>
                    Explore beautiful interiors,
                    discover new styles,
                    and find inspiration
                    for your next room.
                </p>

            </section>


            {/* 
                SEARCH
             */}

            <div className="gallery-search">

                <input
                    type="text"
                    placeholder="Search designs, styles or rooms..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />


                <span>
                    🔍
                </span>

            </div>


            {/* 
                FILTERS
        */}

            <div className="gallery-filters">

                {[
                    "All",
                    "Living Room",
                    "Bedroom",
                    "Kitchen",
                    "Dining Room",
                    "Home Office",
                    "Bathroom"
                ].map((category) => (

                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "filter-btn active"
                                : "filter-btn"
                        }
                        onClick={() => {

                            setSelectedCategory(
                                category
                            );

                            setShowFavorites(false);

                        }}
                    >
                        {category}
                    </button>

                ))}


                {/* SAVED DESIGNS */}

                <button
                    className={
                        showFavorites
                            ? "filter-btn active"
                            : "filter-btn"
                    }
                    onClick={() =>
                        setShowFavorites(
                            !showFavorites
                        )
                    }
                >
                    ♥ Saved ({favorites.length})
                </button>

            </div>


            {/* 
                DESIGN GRID
             */}

            <section className="gallery-grid">

                {filteredDesigns.length > 0 ? (

                    filteredDesigns.map(
                        (design) => (

                            <div
                                className="gallery-card"
                                key={design.id}
                            >


                                {/* IMAGE */}

                                <div className="gallery-image">

                                    <img
                                        src={design.image}
                                        alt={design.title}
                                    />


                                    {/* FAVORITE */}

                                    <button
                                        className={
                                            favorites.includes(
                                                design.id
                                            )
                                                ? "favorite-btn saved"
                                                : "favorite-btn"
                                        }
                                        onClick={() =>
                                            toggleFavorite(
                                                design.id
                                            )
                                        }
                                        title={
                                            favorites.includes(
                                                design.id
                                            )
                                                ? "Remove from saved designs"
                                                : "Save design"
                                        }
                                    >

                                        {favorites.includes(
                                            design.id
                                        )
                                            ? "♥"
                                            : "♡"}

                                    </button>

                                </div>


                                {/* CONTENT */}

                                <div className="gallery-card-content">

                                    <p className="design-room">
                                        {design.room}
                                    </p>


                                    <h3>
                                        {design.title}
                                    </h3>


                                    <p className="design-info">
                                        {design.style}
                                        {" · "}
                                        {design.colors}
                                    </p>


                                    {/* ACTIONS */}

                                    <div className="gallery-actions">

                                        <button
                                            className="view-btn"
                                            onClick={() =>
                                                alert(
                                                    `Viewing ${design.title}`
                                                )
                                            }
                                        >
                                            View Design
                                        </button>


                                        <Link
                                            to="/room-designer"
                                            className="use-design-btn"
                                        >
                                            Use Design →
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        )
                    )

                ) : (

                    <div className="no-results">

                        <h3>
                            {showFavorites
                                ? "No saved designs yet"
                                : "No designs found"}
                        </h3>


                        <p>
                            {showFavorites
                                ? "Click the ♡ button on a design to save it here."
                                : "Try another search or choose a different room."}
                        </p>

                    </div>

                )}

            </section>

        </div>

    );

}

export default Gallery; 
