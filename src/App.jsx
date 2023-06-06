import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import TransaksiEvent from "./pages/Transaksi/TransaksiEvent/TransaksiEvent"
import TransaksiProduk from "./pages/Transaksi/TransaksiProduk/Transaksiproduk";
import DetailEvent from "./pages/Transaksi/DetailEvent/DetailEvent";
import DetailProduk from "./pages/Transaksi/DetailProduk/DetailProduk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/event" element={<h1>event</h1>} />
          <Route path="/produk" element={<h1>produk</h1>} />
          <Route path="/kategori" element={<h1>kategori</h1>} />
          <Route path="/transaksi" element={<TransaksiEvent/>} />
          <Route path="/transaksi/produk" element={<TransaksiProduk/>} />
          <Route path="/DetailTransaksi/event/:username" element={<DetailEvent/>} />
          <Route path="/DetailTransaksi/produk/:username" element={<DetailProduk/>} />
          <Route path="/promo" element={<h1>promo</h1>} />
          <Route path="/artikel" element={<h1>artikel</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="/pengaturan" element={<h1>pengaturan</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/balink" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
