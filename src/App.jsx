import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import TambahEvent from "./pages/Event/TambahEvent";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import TambahProduk from "./pages/Produk/TambahProduk";
import Produk from "./pages/Produk/Produk";
import DetailEvent from "./components/Event/DetailEvent";
import Event from "./pages/Event/Event";
import Transaksi from "./pages/Transaksi/Transaksi";
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
              <Route path="/event/tambah" element={<TambahEvent />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/produk/tambah" element={<TambahProduk />} />
              <Route path="/kategori" element={<h1>kategori</h1>} />
              <Route path="/transaksi" element={<Transaksi />} />
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
