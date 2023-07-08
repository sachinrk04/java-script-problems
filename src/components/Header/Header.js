import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} className="header-logo" alt="logo test" />
        </Link>
      </div>
      <div className='header-link'>
        <Link to="/">Home</Link>
        <Link to="/abouts">About</Link>
      </div>
    </header>
  )
}
