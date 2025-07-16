import React from "react";

interface PageHeaderProps {
  title: string;
  pretitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, pretitle }) => {
  return (
    <div className="page-header d-print-none">
      <div className="row align-items-center">
        <div className="col">
          <div className="text-body-secondary mt-1">
            {pretitle && <div className="page-pretitle">{pretitle}</div>}
          </div>
          <h2 className="page-title">{title}</h2>
        </div>
        <div className="col-auto ms-auto d-print-none">
          <div className="page-actions">
            {/* Desktop: Einstellungs-Button */}
            <div className="pa-desktop d-none d-sm-inline-flex btn-list">
              <a className="btn btn-primary action-settings" href="/einstellungen">
                <i className="fas fa-cog me-1"></i>
                Einstellungen
              </a>
            </div>
            {/* Mobile: Dropdown-Menü */}
            <div className="pa-mobile d-inline-flex d-sm-none btn-list">
              <div className="dropdown">
                <a href="#" className="link-secondary btn-dark btn btn-icon" data-bs-toggle="dropdown" aria-label="Actions">
                  <i className="fas fa-ellipsis-h"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="/einstellungen">Einstellungen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 