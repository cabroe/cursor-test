import React from "react";
import { useUiStore } from "../store/useUiStore";
import { Link } from "react-router-dom";

const UserDropdown: React.FC = () => {
  const { open, close, isOpen } = useUiStore();

  function handleDropdownToggle(e: React.MouseEvent) {
    e.preventDefault();
    if (isOpen("userDropdown")) {
      close();
    } else {
      open("userDropdown");
    }
  }

  function handleDropdownClose() {
    close();
  }

  return (
    <div className="nav-item dropdown">
      <a
        href="#"
        className="nav-link d-flex lh-1 text-reset p-0"
        data-bs-toggle="dropdown"
        aria-label="Open personal menu"
        aria-expanded={isOpen("userDropdown") ? "true" : "false"}
        onClick={handleDropdownToggle}
      >
        <span className="avatar avatar-sm">
          <span className="avatar" style={{ backgroundColor: "#E91E63", color: "#fff" }} title="admin">AD</span>
        </span>
        <div className="d-none d-xl-block ps-2">
          <div>admin</div>
        </div>
      </a>
      <div className={"dropdown-menu dropdown-menu-end dropdown-menu-arrow" + (isOpen("userDropdown") ? " show" : "") }>
        <Link to="/profile" className="dropdown-item" onClick={handleDropdownClose}>Mein Profil</Link>
        <Link to="/bearbeiten" className="dropdown-item" onClick={handleDropdownClose}>Bearbeiten</Link>
        <Link to="/password" className="dropdown-item" onClick={handleDropdownClose}>Passwort</Link>
        <Link to="/2fa" className="dropdown-item" onClick={handleDropdownClose}>Zwei-Faktor (2FA)</Link>
        <Link to="/api" className="dropdown-item" onClick={handleDropdownClose}>API Zugang</Link>
        <Link to="/settings" className="dropdown-item" onClick={handleDropdownClose}>Einstellungen</Link>
        <div className="dropdown-divider"></div>
        <Link to="/logout" className="dropdown-item" onClick={handleDropdownClose}>Abmelden</Link>
      </div>
    </div>
  );
};

export default UserDropdown; 