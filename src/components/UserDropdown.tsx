import React from "react";
import { Link } from "react-router-dom";

const UserDropdown: React.FC = () => (
  <div className="nav-item dropdown">
    <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open personal menu">
      <span className="avatar avatar-sm">
        <span className="avatar" style={{ backgroundColor: "#E91E63", color: "#fff" }} title="admin">AD</span>
      </span>
      <div className="d-none d-xl-block ps-2">
        <div>admin</div>
      </div>
    </a>
    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <Link to="/profil" className="dropdown-item">Mein Profil</Link>
      <Link to="/bearbeiten" className="dropdown-item">Bearbeiten</Link>
      <Link to="/passwort" className="dropdown-item">Passwort</Link>
      <Link to="/2fa" className="dropdown-item">Zwei-Faktor (2FA)</Link>
      <Link to="/api" className="dropdown-item">API Zugang</Link>
      <Link to="/einstellungen" className="dropdown-item">Einstellungen</Link>
      <div className="dropdown-divider"></div>
      <Link to="/logout" className="dropdown-item">Abmelden</Link>
    </div>
  </div>
);

export default UserDropdown; 