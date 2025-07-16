import React, { useState } from "react";
import RemoteModal from "../components/RemoteModal";
import { useUiStore } from "../store/useUiStore";

const ModalDemo: React.FC = () => {
  const { open, close } = useUiStore();

  return (
    <div>
      <h2>Modal Demo</h2>
      <button className="btn btn-primary" onClick={() => open("remoteModal")}>Modal öffnen</button>
      <RemoteModal
        title="Beispiel-Modal"
        onClose={close}
      >
        <p>Dies ist ein Beispielinhalt im Modal.</p>
      </RemoteModal>
    </div>
  );
};

export default ModalDemo; 