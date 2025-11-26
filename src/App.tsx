import { BrowserRouter as Router, Routes, Route } from "react-router";
import Brivision from "./pages/Brivison";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Brivision />} />
        </Routes>
      </Router>
    </>
  );
}
