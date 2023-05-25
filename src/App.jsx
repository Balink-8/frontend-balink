
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
