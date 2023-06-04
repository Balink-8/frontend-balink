import styles from './DetailProduk.module.css'
import Images from '../../assets/assetsLandingPage/bali.svg'
import Button from '../../elements/Button/Button'
import Hapus from '../../assets/icons/delete.svg'
import Edit from '../../assets/icons/edit_square.svg'
import { useNavigate } from 'react-router-dom'

const DataDetailProduk = {
   title: "Pie susu khass bali",
   titleDeskripsi: "MasukaPie susu Bli ajik dengan Rasa yang manis dan tekstur yang lembut, jajanan khas Pulau Dewata Bali. Berbagai macam Rasa dan Variant yang ada.",
   deskripsi: "!! Apabila stok masih tersedia jadi Pie susu masih ready !! n DeskripsiMasukaPie susu Bli ajik dengan Rasa yang manis dan tekstur yang lembut, jajanan khas pulau dewata bali. Berbagai macam rasa dan variant yang ada.",
   kategori: "Pakaian",
   harga: "120000",
   stok: "190"
}

const DetailProduk = () => {
   const navigate = useNavigate()
   const handleClickEdit = () => {
      navigate("/produk/editProduk")
   }
   return(
      <div className={styles.wrapper} id='wrapper'>
         <div className={styles.wrapperDetail} id='wrapper-detail'>
         <h1 className='headline-small-semibold'>Detail Produk</h1>
         <div className={styles.parentImages} id='parentsImages'>
             <img src={Images} alt="" className={styles.imagesDetail}/>
             <img src={Images} alt="" className={styles.imagesDetail}/>
             <img src={Images} alt="" className={styles.imagesDetail}/>
             <img src={Images} alt="" className={styles.imagesDetail}/>
         </div>

         <div className={styles.parentDetail} id='parentsDetail'>
            <h1 className={`title-large-semibold ${styles.titleProduk}`} id='titleProduk'>{DataDetailProduk.title}</h1>
            <p className='body-medium-reguler' id='title-deskripsi'>{DataDetailProduk.titleDeskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
            <p className='body-medium-reguler' id='deskripsi'>{DataDetailProduk.deskripsi}</p>
         </div>

         <div className={styles.keterangan} id='keterangan'>
            <div className={styles.kategori} id='kategori'>
               <label className='body-medium-regular'>Kategori Produk</label>
               <p className='title-medium-semibold'>{DataDetailProduk.kategori}</p>
            </div>
            <div className={styles.harga} id='harga'>
               <label className='body-medium-reguler'>Harga Produk</label>
               <p className='title-medium-semibold'>{DataDetailProduk.harga}</p>
            </div>
            <div className={styles.stok} id='stok'>
               <label className='body-medium-reguler'>Stok Produk</label>
               <p className='title-medium-semibold'>{DataDetailProduk.stok}</p>
            </div>
         </div>
      </div>
      <div className={styles.button}>
         <Button label="Hapus" color="white" icon={Hapus}/>
         <Button label="Edit"  color="brown" icon={Edit} onClick={handleClickEdit}/>
      </div>
   </div>
   )
}
export default DetailProduk