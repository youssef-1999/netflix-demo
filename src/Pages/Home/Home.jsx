import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitleCards from "../../Components/TitleCards/TitleCards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useHeroStyles } from "./DynamicHeroStyles.jsx";

function Home() {
 const { titleStyle, paragraphStyle, playInfoStyle, buttonStyle,heroStyle } = useHeroStyles();



  return (
    <div className="home">
      <Navbar />
      <div className="home_section">
        <div style={heroStyle}>
          <img
            src="/assets/hero_title.png"
            alt="Hero Title"
            style={titleStyle}
          />
          <p style={paragraphStyle}>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>

          <div style={playInfoStyle}>
            <div
              className="d-flex align-items-center text-black bg-white gap-2 play_button"
              style={buttonStyle}
            >
              <FaPlay />
              <p className="fw-bold mb-0">Play</p>
            </div>

            <div
              className="d-flex align-items-center text-white gap-2 info info_button"
              style={{
                ...buttonStyle,
                backgroundColor: "rgba(76, 76, 76, 0.8)",
              }}
            >
              <IoIosInformationCircleOutline />
              <p className="fw-bold mb-0">More Info</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Titles */}
      <TitleCards title="Upcoming" category="upcoming" />
      <div className="more-cards">
        <TitleCards title="Now Playing" category="now_playing" />
        <TitleCards title="Popular" category="popular" />
        <TitleCards title="Top Rated" category="top_rated" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
