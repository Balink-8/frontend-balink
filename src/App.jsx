import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
