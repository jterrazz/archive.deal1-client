import React from "react";
// import PropTypes from "prop-types";
import Link from "next/link";

const TheNavigationBar = () => (
  <nav className="d-flex fixed-top" style={styles.navbar}>
    <Link href="/">
      <div>Home</div>
    </Link>
    <Link href="/about">
      <div>About page</div>
    </Link>
    <div>Hello</div>
  </nav>
);

const styles = {
  navbar: {
    background: "white",
    boxShadow: "0 0 25px rgba(74, 74, 74, 0.2)"
  }
};

export default TheNavigationBar;
