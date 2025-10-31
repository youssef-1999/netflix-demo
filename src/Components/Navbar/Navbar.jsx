import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
const navRef = useRef();

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      navRef.current?.classList.add("bg-danger");
    } else {
      navRef.current?.classList.remove("bg-danger");
    }
  };

  // ✅ Add listener once
  window.addEventListener("scroll", handleScroll);

  // ✅ Run immediately to set correct state on load
  handleScroll();

  // ✅ Cleanup on unmount
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav ref={navRef} className="navbar custom_navbar navbar-expand-lg bg-transparent fixed-top top-0">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" href="/">
          <img src="/assets/logo.png" className="w-100" alt="netflix_logo" />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left-side links */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                New & Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Browse by Language
              </Link>
            </li>
          </ul>

          {/* Right-side items */}
          <div className="d-flex align-items-center ms-auto gap-3">
            <img src="/assets/search_icon.svg" alt="search-icon" srcset="" />

            <Link className="nav-link " to="/">
              Children
            </Link>

            <Link className="nav-link " to="/">
              <FaBell />
            </Link>

            <div className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/profile_img.png"
                  className="profile-img"
                  alt="profile"
                />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Signout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
