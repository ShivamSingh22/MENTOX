import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <>
      {!IsAuthenticated() && (
        <Link to="login">
          <button className="btn" size="lg">
            LogIn
          </button>
        </Link>
      )}
      {IsAuthenticated() && (
        <Link to="/Home">
          <button className="btn" size="lg" onClick={() => signout()}>
            LogOut
          </button>
        </Link>
      )}
    </>
  );
}

export default Button;
