import React, { useState } from "react";
import RemoteModal from "../components/RemoteModal";

const ModalDemo: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Modal Demo</h2>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Modal öffnen
      </button>
      <RemoteModal
        show={show}
        title="Beispiel-Modal"
        onClose={() => setShow(false)}
      >
        <p>Dies ist ein Beispielinhalt im Modal.</p>
      </RemoteModal>
    </div>
  );
};

export default ModalDemo; 