import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
