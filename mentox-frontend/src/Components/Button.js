import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <>
      <Link to="login">
        <button className="btn" size="lg">
          LogIn
        </button>
      </Link>
    </>
  );
}

export default Button;
