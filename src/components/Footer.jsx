import React from "react";
import ReactDOM from "react-dom";

const date = new Date();

const currentYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>CopyrightÂ© {currentYear}</p>
    </footer>
  );
}

export default Footer;
