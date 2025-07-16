import React from "react";

interface RemoteModalProps {
  show: boolean;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

const RemoteModal: React.FC<RemoteModalProps> = ({ show, title, children, footer, onClose }) => {
  return (
    <div
      className={`modal${show ? ' show d-block' : ''}`}
      id="remote_modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="remote_modal_label"
      style={show ? { backgroundColor: 'rgba(0,0,0,0.5)' } : {}}
      onClick={onClose}
    >
      <div className="modal-dialog modal-lg" role="document" onClick={e => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="remote_modal_label">{title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Schließen"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {footer ? (
              footer
            ) : (
              <button type="button" className="btn btn-cancel" data-bs-dismiss="modal" onClick={onClose}>
                Schließen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteModal; 