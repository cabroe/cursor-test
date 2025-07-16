import React from "react";
import { Link, useLocation } from "react-router-dom";
import { pageTitles } from "../routes/pageTitles";
import type { PageTitleEntry } from "../routes/pageTitles";
import TicktacActions from "./TicktacActions";
import RecentActivities from "./RecentActivities";
import UserDropdown from "./UserDropdown";

// Tabler-typische Sidebar-Struktur
const Sidebar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  // Hilfsfunktion für Submenu-Active-State
  const isSubmenuActive = (children: Record<string, PageTitleEntry>) =>
    Object.keys(children).some((childPath) => pathname === childPath);

  return (
    <aside className="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Toggler für mobile Ansicht */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Brand und Titel */}
        <div className="d-flex justify-content-start flex-fill d-lg-none">
          <h2 className="page-title d-lg-none ps-2 text-white">Dashboard</h2>
          <h1 className="navbar-brand d-none d-lg-inline-flex">
            <Link to="/" title="Dashboard">
              Schichtplaner
            </Link>
          </h1>
        </div>
        <h1 className="navbar-brand d-none d-lg-inline-flex">
          <Link to="/" title="Dashboard" className="mt-2">
            Schichtplaner
          </Link>
        </h1>

        {/* Mobile: Schnellzugriffe und User-Menü */}
        <div className="navbar-nav flex-row d-lg-none">
          <TicktacActions />
          <RecentActivities />
          <UserDropdown />
        </div>

        {/* Hauptmenü */}
        <div id="navbar-menu" className="collapse navbar-collapse">
          <ul className="navbar-nav pt-lg-3">
            {Object.entries(pageTitles).map(([path, entry]) => {
              if (entry.children) {
                // Submenu (z.B. Demos)
                return (
                  <li className={`nav-item dropdown${isSubmenuActive(entry.children) ? " active" : ""}`} key={path}>
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-expanded={isSubmenuActive(entry.children) ? "true" : "false"}
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block text-center">
                        <i className={entry.icon}></i>
                      </span>
                      <span className="nav-link-title">{entry.title}</span>
                    </a>
                    <div className={`dropdown-menu${isSubmenuActive(entry.children) ? " show" : ""}`}>
                      {Object.entries(entry.children).map(([childPath, child]) => (
                        <Link className={`dropdown-item${pathname === childPath ? " active" : ""}`} to={childPath} key={childPath}>
                          <span className="me-2"><i className={child.icon}></i></span>
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }
              // Normale Route
              return (
                <li className={`nav-item${pathname === path ? " active" : ""}`} key={path}>
                  <Link className="nav-link" to={path}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block text-center">
                      <i className={entry.icon}></i>
                    </span>
                    <span className="nav-link-title">{entry.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 