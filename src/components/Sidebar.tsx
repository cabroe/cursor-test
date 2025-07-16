import React, { useRef, useEffect } from "react";
import UserDropdown from "./UserDropdown";
import TicktacActions from "./TicktacActions";
import RecentActivities from "./RecentActivities";
import { pageTitles } from "../routes/routeConfig";
import { Link, useLocation } from "react-router-dom";
import type { PageTitleEntry } from "../routes/routeConfig";

// Hilfsfunktion zum Schließen des mobilen Menüs
function closeSidebarMenu() {
  const menu = document.getElementById("navbar-menu");
  const toggler = document.querySelector('[data-bs-target="#navbar-menu"]');
  if (menu && menu.classList.contains("show")) {
    // Versuche, Bootstrap Collapse API zu nutzen
    // @ts-ignore
    if (window.bootstrap && window.bootstrap.Collapse) {
      // @ts-ignore
      const collapse = window.bootstrap.Collapse.getOrCreateInstance(menu);
      collapse.hide();
    } else {
      menu.classList.remove("show");
    }
    const backdrop = document.querySelector(".navbar-backdrop");
    if (backdrop && backdrop.parentNode) {
      backdrop.parentNode.removeChild(backdrop);
    }
    if (toggler) {
      toggler.setAttribute("aria-expanded", "false");
      toggler.classList.add("collapsed");
    }
  }
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const togglerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const menu = document.getElementById("navbar-menu");
    const toggler = togglerRef.current;
    if (!menu || !toggler) return;
    function handleShown() {
      if (!toggler) return;
      toggler.classList.remove("collapsed");
      toggler.setAttribute("aria-expanded", "true");
    }
    function handleHidden() {
      if (!toggler) return;
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }
    menu.addEventListener("shown.bs.collapse", handleShown);
    menu.addEventListener("hidden.bs.collapse", handleHidden);
    return () => {
      menu.removeEventListener("shown.bs.collapse", handleShown);
      menu.removeEventListener("hidden.bs.collapse", handleHidden);
    };
  }, []);

  // Hilfsfunktion für Submenu-Active-State
  const isSubmenuActive = (children: Record<string, PageTitleEntry>) =>
    Object.keys(children).some((childPath) => pathname === childPath);

  return (
    <aside className="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Toggler für mobile Ansicht */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-expanded="false"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Brand und Titel */}
        <div className="d-flex justify-content-start flex-fill d-lg-none">
          <h2 className="page-title d-lg-none ps-2 text-white">Dashboard</h2>
          <h1 className="navbar-brand d-none d-lg-inline-flex">
            <Link to="/" title="Dashboard" onClick={closeSidebarMenu}>
              Schichtplaner
            </Link>
          </h1>
        </div>
        <h1 className="navbar-brand d-none d-lg-inline-flex">
          <Link to="/" title="Dashboard" className="mt-2" onClick={closeSidebarMenu}>
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
                        <Link className={`dropdown-item${pathname === childPath ? " active" : ""}`} to={childPath} key={childPath} onClick={closeSidebarMenu}>
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
                  <Link className="nav-link" to={path} onClick={closeSidebarMenu}>
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