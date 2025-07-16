import {
  Route,
  Routes,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Times from "./pages/Times";
import Settings from "./pages/Settings";
import ModalDemo from "./pages/ModalDemo";
import ToastDemo from "./pages/ToastDemo";
import Sidebar from "./components/Sidebar";
import PageHeader from "./components/PageHeader";
import HeaderWithRoute from "./components/HeaderWithRoute";
import { getHeaderComponentForRoute } from "./utils/getHeaderComponentForRoute";
import "./App.css";

// PageHeaderContent ist für die dynamische Auswahl und Anzeige des passenden PageHeaders zuständig.
// Sie liest anhand der aktuellen Route (pathname) aus der zentralen routeConfig (pageTitles) die passende Header-Komponente aus
// und rendert diese im zentralen PageHeader. So bleibt die Header-Logik für alle Seiten flexibel und zentral wartbar.
function PageHeaderContent() {
  const location = useLocation();
  const { pathname } = location;
  const HeaderComponent = getHeaderComponentForRoute(pathname);
  if (HeaderComponent) {
    return <HeaderComponent />;
  }
  return null;
}

function App() {
  return (
    <Router>
      <Sidebar />
      <HeaderWithRoute />
      <div className="page-wrapper">
        <div className="container-fluid">
          <PageHeader>
            <PageHeaderContent />
          </PageHeader>
        </div>
        <div className="page-body">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/times" element={<Times />} />
              <Route path="/settings" element={<Settings />} />
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
