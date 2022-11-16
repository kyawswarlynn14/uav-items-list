import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <ul className="flex text-lg justify-between font-bold font-serif py-3">
        <li className="">
          <Link
            to="/"
            style={location.pathname === "/" ? { color: "coral", borderBottom: '2px solid red', paddingBottom: '3px' } : {}}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/motor"
            style={location.pathname === "/motor" ? { color: "coral", borderBottom: '2px solid red', paddingBottom: '3px' } : {}}
          >
            Motor Page
          </Link>
        </li>

        <li>
          <Link
            to="/esc"
            style={location.pathname === "/esc" ? { color: "coral", borderBottom: '2px solid red', paddingBottom: '3px' } : {}}
          >
            Esc Page
          </Link>
        </li>

        <li>
          <Link
            to="/propeller"
            style={location.pathname === "/propeller" ? { color: "coral", borderBottom: '2px solid red', paddingBottom: '3px' } : {}}
          >
            Propeller Page
          </Link>
        </li>
      </ul>
    </header>
  );
}
