import React, { useState } from "react";
import Toast from "../components/Toast";

const ToastDemo: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Toast Demo</h2>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Toast anzeigen
      </button>
      <Toast
        show={show}
        message="Dies ist eine Beispiel-Toast-Nachricht!"
        onClose={() => setShow(false)}
      />
    </div>
  );
};

export default ToastDemo; 