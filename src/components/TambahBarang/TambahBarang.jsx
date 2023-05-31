import styles from './TambahBarang.module.css'
import Input from '../../elements/Input/Input'
import Gambar1 from '../../assets/assetsLandingPage/wisata.svg'
import Gambar2 from '../../assets/assetsLandingPage/wisata.svg'
import Gambar3 from '../../assets/assetsLandingPage/wisata.svg'
import Undo from '../../assets/icons/undo.png'
import Save from '../../assets/icons/diskette.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const TambahBarang = () => {
  const [url, setUrl] = useState('')
  const [namaProduk, setNamaProduk] = useState('')
  const [deskripsiProduk, setDeskripsiProduk] = useState('')
  const [kategoriProduk, setKategoriProduk] = useState('')
  const [harga, setHarga] = useState(50000)
  const [stok, setStok] = useState('')

  const navigate = useNavigate()

  const handleChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const handleChangeNama = (e) => {
    setNamaProduk(e.target.value)
  }

  const handleDeskripsiProduk = (e) => {
    setDeskripsiProduk(e.target.value)
  }

  const handleKategoriProduk = (e) => {
    setKategoriProduk(e.target.value)
  }
  const handleStok = (e) => {
    setStok(e.target.value)
  }

  // const handleHarga = (e) => {
  //   setHarga(e.target.value)
  // }

  const submitHandler = (e) => {
    e.preventDefault()

    alert("cek")

    const variables = {
      image: url,
      nama_produk: namaProduk,
      deskripsi_produk: deskripsiProduk,
      kategori_produk: kategoriProduk,
      harga: harga,
      stok: stok,
      id: Math.random().toString()
    }
  }
   return(
      <form className={styles.wrapper} onSubmit={submitHandler}>
         <div className={styles.produkBaru}>
         <h1 className='headline-small-semibold'>Buat Produk Baru</h1>
            <div className={styles.rowTambahProduk}>
               <div className={styles.sideTop}>
                  <h2 className='title-large-semibold'>Foto Produk</h2>
                  <p className='body-small-regular'>Foto Produk menggunakan format, Jpg, Jpeg & Png dengan ukuran maksimal 2 Mb.Pilih foto produk min 3 foto dan maksimal 5 foto. Pilih foto anda yang menarik agar pembeli lebih tertarik </p>
               </div>
               <div className={styles.sideGambar}>
                  <div className={styles.boxImage}><img src={Gambar1} className={styles.imageProduk}/></div>
                  <div className={styles.boxImage}><img src={Gambar2} className={styles.imageProduk}/></div>
                  <div className={styles.boxImage}><img src={Gambar3} className={styles.imageProduk}/></div>
                  <div className={styles.parentBoxFile}>
                     <label htmlFor="boxFile" className={styles.AddBoxImage}> + </label>
                     <Input
                     className={styles.boxFile}
                     id='boxFile'
                     type='file'
                     onChange={handleChangeUrl}
                    />
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.mainProduk}>
            <div className={styles.rowTambahProduk}>
               <div className={styles.sideLeft}>
                  <div className={styles.sideTopParent}>
                     <div className={styles.sideTopLeft}>
                        <h2 className='title-large-semibold'>Nama Produk</h2>
                     </div>
                     <div className={styles.sideTopRigt}>
                        <p className={styles.info}>Wajib</p>
                     </div>
                  </div>
                  <p className='body-small-regular'>Ketik nama produk maksimal 70 kata dengan kalimat yang menarik agar pembeli dapat menemukan produk dari nama produk, jenis produk, merek dan keterangan warna, bahan dll.  </p>
               </div>
               <div className={styles.sideRight}>
                  <label className={styles.label}>Nama Produk</label>
                  <div className={styles.parentInput}>
                  <Input
                     type="text"
                     placeholder="Masukan nama produk"
                     name="namaProduk"
                     id="namaProduk"
                     onChange={handleChangeNama}
                     className={`body-medium-regular ${styles.namaProduk}`}
                     />
                  </div>
               </div>
             </div>

             <div className={styles.rowTambahProduk}>
               <div className={styles.sideLeft}>
                  <div className={styles.sideTopParent}>
                     <div className={styles.sideTopLeft}>
                        <h2 className='title-large-semibold'>Deskripsi Produk</h2>
                     </div>
                     <div className={styles.sideTopRigt}>
                        <p className={styles.info}>Wajib</p>
                     </div>
                  </div>
                  <p className='body-small-regular'>Tuliskan deskripsi produkmu untuk disajikan dalam bentuk penjelasn yang lebih rinci. </p>
               </div>
               <div className={styles.sideRight}>
                  <label className={styles.label}>Deskripsi Produk</label>
                  <div className={styles.parentInput}>
                     <Input
                     type="text"
                     placeholder="Masukan Deskripsi produk"
                     name="deskripsiProduk"
                     id="deskripsiProduk"
                     onChange={handleDeskripsiProduk}
                     className={`body-medium-regular ${styles.deskripsiProduk}`}
                     />
                  </div>
               </div>
             </div>

             <div className={styles.rowTambahProduk}>
               <div className={styles.sideLeft}>
                  <div className={styles.sideTopParent}>
                     <div className={styles.sideTopLeft}>
                        <h2 className='title-large-semibold'>Kategori Produk</h2>
                     </div>
                     <div className={styles.sideTopRigt}>
                        <p className={styles.info}>Wajib</p>
                     </div>
                  </div>
                  <p className='body-small-regular'>Kategori untuk menemukan barang yang sudah di cari dengan kosa kata kunci yang sudah menjadi layanan dari Balink.</p>
               </div>
               <div className={styles.sideRight}>
                   <label className={styles.label}>Kategori Produk</label>
                  <div className={styles.parentInput}>
                     <select
                     type="select"
                     id="kategoriProduk"
                     name="kategoriProduk"
                     onChange={handleKategoriProduk}
                     placeholder='masukan kategori produk'
                     className={styles.kategoriProduk}
                     >
                        <option selected hidden></option>
                        <option value="Alat Masak">Pakaian</option>
                        <option value="Alat Mandi">Perhiasan</option>
                        <option value="Sport">Kerajinan Tangan</option>
                        <option value="Souvenir">Aksesoris</option>
                     </select>
                  </div>
               </div>
             </div>

             <div className={styles.rowTambahProduk}>
               <div className={styles.sideLeft}>
                  <div className={styles.sideTopParent}>
                     <div className={styles.sideTopLeft}>
                        <h2 className='title-large-semibold'>Harga Produk</h2>
                     </div>
                     <div className={styles.sideTopRigt}>
                        <p className={styles.info}>Wajib</p>
                     </div>
                  </div>
                  <p className='body-small-regular'>Kategori untuk menemukan barang yang sudah di cari dengan kosa kata kunci yang sudah menjadi layanan dari Balink.</p>
               </div>
               <div className={styles.sideRight}>
                  <label className={styles.label}>harga produk</label>
                  <div className={styles.parentInput}>
                     <Input
                     type="text"
                     placeholder="Rp. 120000"
                     name="hargaProduk"
                     id="hargaProduk"
                     className={`body-medium-regular ${styles.hargaProduk}`}
                     />
                  </div>
               </div>
             </div>

             <div className={styles.rowTambahProduk}>
               <div className={styles.sideLeft}>
                  <div className={styles.sideTopParent}>
                     <div className={styles.sideTopLeft}>
                        <h2 className='title-large-semibold'>Stok Produk</h2>
                     </div>
                     <div className={styles.sideTopRigt}>
                        <p className={styles.info}>Wajib</p>
                     </div>
                  </div>
                  <p className='body-small-regular'>Kategori untuk menemukan barang yang sudah di cari dengan kosa kata kunci yang sudah menjadi layanan dari Balink.</p>
               </div>
               <div className={styles.sideRight}>
                  <label className={styles.label}>Stok Produk</label>
                  <div className={styles.parentInput}>
                     <Input
                     type="text"
                     placeholder='190'
                     name="stokProduk"
                     id="stokProduk"
                     onChange={handleStok}
                     className={`body-medium-regular ${styles.stokProduk}`}
                     />
                  </div>
               </div>
             </div>
         </div>
         <div className={styles.parentButton}>
             <button className={styles.buttonRiset}><span><img src={Undo} className={styles.iconButton}/></span>Reset</button>
             <button className={styles.buttonSimpan}><span><img src={Save} className={styles.iconButton}/></span>Simpan</button>
         </div>
    </form>
   )
}
export default TambahBarang