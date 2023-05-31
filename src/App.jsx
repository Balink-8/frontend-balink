import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import TambahEvent from "./pages/Event/TambahEvent";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import TransaksiEvent from "./pages/Transaksi/TransaksiEvent/TransaksiEvent";
import TransaksiProduk from "./pages/Transaksi/TransaksiProduk/Transaksiproduk";
import TambahBarang from "./components/TambahBarang/TambahBarang";
import Produk from "./pages/Produk/Produk";
import DetailEvent from "./components/Event/DetailEvent";
import Event from "./pages/Event/Event";
import TransaksiEvent from "./pages/Transaksi/TransaksiEvent/TransaksiEvent";
import TransaksiProduk from "./pages/Transaksi/TransaksiProduk/Transaksiproduk";
import { ModalAkunContextProvider } from "./context/ModalAkunContext";
import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <BrowserRouter>
      <ModalAkunContextProvider>
        <ModalContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/akun" element={<Akun />} />
              <Route path="/event/detail" element={<DetailEvent />} />
              <Route path="/event" element={<Event />} />
              <Route path="/tambah-event" element={<TambahEvent />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/tambah-produk" element={<TambahBarang />} />
              <Route path="/kategori" element={<h1>kategori</h1>} />
              <Route path="/transaksi" element={<TransaksiEvent />} />
              <Route path="/transaksi/produk" element={<TransaksiProduk />} />
              <Route path="/promo" element={<h1>promo</h1>} />
              <Route path="/artikel" element={<h1>artikel</h1>} />
              <Route path="/profile" element={<h1>profile</h1>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </ModalContextProvider>
      </ModalAkunContextProvider>
    </BrowserRouter>
  );
}

export default App;
