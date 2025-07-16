import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HeaderWithRoute from "./components/HeaderWithRoute";
import PageHeaderWithRoute from "./components/PageHeaderWithRoute";
import "./App.css";
import ModalDemo from "./pages/ModalDemo";
import ToastDemo from "./pages/ToastDemo";

// Beispielseiten
function Home() {
  return <h1>Startseite</h1>;
}
function Zeiten() {
  return <h1>Zeiten</h1>;
}
function Einstellungen() {
  return <h1>Einstellungen</h1>;
}

function App() {
  return (
    <Router>
      <Sidebar />
      <HeaderWithRoute />
      <div className="page-wrapper">
        <div className="container-fluid">
          <PageHeaderWithRoute />
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/zeiten" element={<Zeiten />} />
              <Route path="/einstellungen" element={<Einstellungen />} />
              <Route path="/modal-demo" element={<ModalDemo />} />
              <Route path="/toast-demo" element={<ToastDemo />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
