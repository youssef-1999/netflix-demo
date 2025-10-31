import React from "react";
import "./Footer.css";

function Footer() {
  const footerLinks = [
    { id: 1, label: "Audio Description", href: "#" },
    { id: 2, label: "Help Centre", href: "#" },
    { id: 3, label: "Gift Cards", href: "#" },
    { id: 4, label: "Media Centre", href: "#" },
    { id: 5, label: "Investor Relations", href: "#" },
    { id: 6, label: "Jobs", href: "#" },
    { id: 7, label: "Terms of Use", href: "#" },
    { id: 8, label: "Privacy", href: "#" },
    { id: 9, label: "Legal Notices", href: "#" },
    { id: 10, label: "Cookie Preferences", href: "#" },
    { id: 11, label: "Corporate Information", href: "#" },
    { id: 12, label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="footer py-4">
      <div className="container  text-md-start">
        <div className="row">
          {footerLinks.map((link) => (
            <div key={link.id} className="col-6 col-md-3 mb-2">
              <a
                href={link.href}
                className="footer-link text-decoration-none text-white"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-4 text-white-50 small mb-0 text-center">
          © 2025 Netflix Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
