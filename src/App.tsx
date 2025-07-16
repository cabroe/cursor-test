import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Times from "./pages/Times";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import ModalDemo from "./pages/ModalDemo";
import ToastDemo from "./pages/ToastDemo";
import MainTemplate from "./templates/MainTemplate";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainTemplate><Dashboard /></MainTemplate>} />
        <Route path="/times" element={<MainTemplate><Times /></MainTemplate>} />
        <Route path="/settings" element={<MainTemplate><Settings /></MainTemplate>} />
        <Route path="/modal-demo" element={<MainTemplate><ModalDemo /></MainTemplate>} />
        <Route path="/toast-demo" element={<MainTemplate><ToastDemo /></MainTemplate>} />
      </Routes>
    </Router>
  );
}

export default App;
