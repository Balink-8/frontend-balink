import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import HubungiKami from "./pages/LandingPage/HubungiKami";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import Event from "./pages/Event/Event";
import TambahEvent from "./pages/Event/TambahEvent";
import EditEvent from "./pages/Event/EditEvent";
import DetailEvent from "./pages/Event/DetailEvent";
import EventArtikel from "./pages/Event/EventArtikel";
import Produk from "./pages/Produk/Produk";
import TambahProduk from "./pages/Produk/TambahProduk";
import EditProduk from "./pages/Produk/EditProduk";
import DetailProduk from "./pages/Produk/DetailProduk";
import Kategori from "./pages/Kategori/Kategori";
import TambahKategori from "./pages/Kategori/TambahKategori";
import DetailKategori from "./pages/Kategori/DetailKategori";
import EditKategori from "./pages/Kategori/EditKategori";
import Transaksi from "./pages/Transaksi/Transaksi";
import DetailEventTransaksi from "./pages/Transaksi/DetailEvent/DetailEvent";
import DetailProdukTransaksi from "./pages/Transaksi/DetailProduk/DetailProduk";
import Promo from "./pages/Promo/Promo";
import TambahPromo from "./pages/Promo/TambahPromo";
import EditPromo from "./pages/Promo/EditPromo";
import DetailPromo from "./pages/Promo/DetailPromo";
import Artikel from "./pages/Artikel/Artikel";
import TambahArtikel from "./pages/Artikel/TambahArtikel";
import EditArtikel from "./pages/Artikel/EditArtikel";
import DetailArtikel from "./pages/Artikel/DetailArtikel";
import Profil from "./pages/Profil/Profil";
import EditProfil from "./pages/Profil/EditProfil";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  Modal.setAppElement("#root");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/akun" element={<Akun />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/tambah" element={<TambahEvent />} />
            <Route path="/event/edit/:id" element={<EditEvent />} />
            <Route path="/event/detail/:id" element={<DetailEvent />} />
            <Route path="/tentang-artikel" element={<EventArtikel />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/produk/tambah" element={<TambahProduk />} />
            <Route path="/produk/edit/:id" element={<EditProduk />} />
            <Route path="/produk/detail/:id" element={<DetailProduk />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/kategori/tambah" element={<TambahKategori />} />
            <Route path="/kategori/edit/:id" element={<EditKategori />} />
            <Route path="/kategori/detail/:id" element={<DetailKategori />} />
            <Route path="/transaksi" element={<Transaksi />} />
            <Route
              path="/transaksi/event/detail"
              element={<DetailEventTransaksi />}
            />
            <Route
              path="/transaksi/produk/detail"
              element={<DetailProdukTransaksi />}
            />
            <Route path="/promo" element={<Promo />} />
            <Route path="/promo/tambah" element={<TambahPromo />} />
            <Route path="/promo/edit/:id" element={<EditPromo />} />
            <Route path="/promo/detail/:id" element={<DetailPromo />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/tambah" element={<TambahArtikel />} />
            <Route path="/artikel/edit/:id" element={<EditArtikel />} />
            <Route path="/artikel/detail/:id" element={<DetailArtikel />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/profile/edit" element={<EditProfil />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/HubungiKami" element={<HubungiKami />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
