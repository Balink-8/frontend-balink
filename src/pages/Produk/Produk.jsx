import TableProduk from "../../components/Table/TableProduk/TableProduk"
import Gambar from '../../assets/assetsLandingPage/bali.svg'
const Produk = () => {
   const dataProduk = [
    { foto:  <img src={Gambar}/>, judul: 'Kaos Barong', harga: '100000', kategori: 'Pakaian' },
    { foto:  <img src={Gambar}/>, judul: 'Sarung Tenun', harga: '250000', kategori: 'Pakaian'},
    { foto:  <img src={Gambar}/>, judul: 'Blankon', harga: '50000', kategori: 'Atasan'},
    { foto:  <img src={Gambar}/>, judul: 'Selendang', harga: '150000', kategori: 'Pakaian Aksesoris'},
    { foto:  <img src={Gambar}/>, judul: 'Gantungan', harga: '45000', kategori: 'Aksesoris'},
    { foto:  <img src={Gambar}/>, judul: 'Celana Bali', harga: '79000', kategori: 'Pakaian'},
    { foto:  <img src={Gambar}/>, judul: 'Peci', harga: '35000', kategori: 'Atasan'},
    { foto:  <img src={Gambar}/>, judul: 'Kaos Batik', harga: '60000', kategori: 'Pakaian'},
    { foto:  <img src={Gambar}/>, judul: 'Patunng Perhiasan', harga: '75000', kategori: 'Aksesoris'},
    { foto:  <img src={Gambar}/>, judul: 'Cendi', harga: '55000', kategori: 'Perhiasan'},
    { foto: 'tes', judul: 'tes', harga: '082121213434', kategori: 'Jl. Hidup Damai'},
  
  ];
   return(
      <TableProduk data={dataProduk}/>
   )
}

export default Produk