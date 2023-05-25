import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";
import Login from '../src/components/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentExample />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
