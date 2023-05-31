import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import DetailEvent from "./components/Event/DetailEvent";
import Event from "./pages/Event/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/event/detail" element={<DetailEvent/>} />
          <Route path="/event" element={<Event />} />
          <Route path="/produk" element={<h1>produk</h1>} />
          <Route path="/kategori" element={<h1>kategori</h1>} />
          <Route path="/transaksi" element={<h1>transaksi</h1>} />
          <Route path="/promo" element={<h1>promo</h1>} />
          <Route path="/artikel" element={<h1>artikel</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/balink" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
