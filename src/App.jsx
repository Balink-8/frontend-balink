
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";
import Login from '../src/components/Login/Login'
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
