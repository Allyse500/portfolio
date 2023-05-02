import React from "react";
import "./footer.css";
import "../../index.css"

function Footer() {
  const style = {
    textAlign: "center",
    fontSize: "150%"
  }

  const year = new Date;
  return (
    <footer className="footer">
      <p style = {style}>WebDev Portfolio {year.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
