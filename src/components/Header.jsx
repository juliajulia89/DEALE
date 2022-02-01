import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-800 p-10">
      <Link to="/">
        <span className="flex justify-center">
          <i className="fas fa-home fa-2x" style={{ color: "#FDC55C" }}></i>
        </span>
      </Link>
    </header>
  );
}

export default Header;
