import React from "react";
import "./footer.css";
import "../../index.css"

function Footer() {
  const style = {
    textAlign: "center",
    fontSize: "150%"
  }
  return (
    <footer className="footer">
      <p style = {style}>WebDev Portfolio 2022</p>
    </footer>
  );
}

export default Footer;
