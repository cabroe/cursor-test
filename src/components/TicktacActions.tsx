import React from "react";

const TicktacActions: React.FC = () => (
  <div className="nav-item d-flex me-1 ticktac">
    <div className="btn-list">
      {/* Stoppen (ausgeblendet, nur als Beispiel) */}
      <div className="ticktac-menu" style={{ display: "none" }}>
        <a title="Zeiterfassung stoppen" className="btn btn-dark btn-icon px-sm-2">
          <i className="fas fa-stop-circle text-danger me-1"></i>
          <span className="d-none d-sm-block">0:00</span>
        </a>
      </div>
      {/* Starten */}
      <div className="ticktac-menu-empty">
        <a title="Zeiterfassung starten" className="btn btn-dark btn-icon px-sm-2">
          <i className="fas fa-play text-success me-1"></i>
          <span className="d-none d-sm-block">0:00</span>
        </a>
      </div>
    </div>
  </div>
);

export default TicktacActions; 