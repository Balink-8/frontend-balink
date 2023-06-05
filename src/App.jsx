import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage/LandingPage";
import TambahEvent from "./pages/Event/TambahEvent";
import Dashboard from "./pages/Dashboard/Dashboard";
import Akun from "./pages/Akun/Akun";
import TambahProduk from "./pages/Produk/TambahProduk";
import Produk from "./pages/Produk/Produk";
import DetailEvent from "./pages/Event/DetailEvent";
import Event from "./pages/Event/Event";
import Transaksi from "./pages/Transaksi/Transaksi";
import Artikel from "./pages/Artikel/Artikel";
import TambahArtikel from "./pages/Artikel/TambahArtikel";
import DetailArtikel from "./pages/Artikel/DetailArtikel";
import EditArtikel from "./pages/Artikel/EditArtikel";
import TambahPromo from "./pages/Promo/TambahPromo";
import DetailPromo from "./pages/Promo/DetailPromo";
import EditPromo from "./pages/Promo/EditPromo";
import Promo from "./pages/Promo/Promo";
import EditEvent from "./pages/Event/EditEvent";
import Kategori from "./pages/Kategori/Kategori";
import TambahKategori from "./pages/Kategori/TambahKategori";
import DetailKategori from "./pages/Kategori/DetailKategori";
import EditKategori from "./pages/Kategori/EditKategori";
import Profil from "./pages/Profil/Profil";
import EditProfil from "./pages/Profil/EditProfil";
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
              <Route path="/event/edit" element={<EditEvent />} />
              <Route path="/produk" element={<Produk />} />
              <Route path="/produk/tambah" element={<TambahProduk />} />
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/kategori/tambah" element={<TambahKategori />} />
              <Route path="/kategori/detail" element={<DetailKategori />} />
              <Route path="/kategori/edit" element={<EditKategori />} />
              <Route path="/transaksi" element={<Transaksi />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/promo/tambah" element={<TambahPromo />} />
              <Route path="/promo/detail" element={<DetailPromo />} />
              <Route path="/promo/edit" element={<EditPromo />} />
              <Route path="/artikel" element={<Artikel />} />
              <Route path="/artikel/tambah" element={<TambahArtikel />} />
              <Route path="/artikel/detail" element={<DetailArtikel />} />
              <Route path="/artikel/edit" element={<EditArtikel />} />
              <Route path="/profile" element={<Profil />} />
              <Route path="/profile/edit" element={<EditProfil />} />
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
