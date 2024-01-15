import "./App.css";
import AboutPage from "./pages/IndexPage/AboutPage/AboutPage";
import IndexPage from "./pages/IndexPage/IndexPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
