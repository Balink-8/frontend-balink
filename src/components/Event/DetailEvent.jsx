import styles from './Event.module.css'
import foto from '../../assets/images/Mask group.png'
import language from '../../assets/icons/language.svg'
import lokasi from '../../assets/icons/location_on.svg'
import link from '../../assets/icons/link.svg'
import alarm from '../../assets/icons/alarm.svg'
import rectangle from '../../assets/images/Rectangle 333.png'
import edit from '../../assets/icons/edit_square.svg'
import del from '../../assets/icons/delete.svg'
import {Switch} from 'antd';
import { useState } from 'react';

const DetailEvent = () => {
    const [toggle, setToggle] = useState(false);
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    const detailEvent =
        {
          img: foto,
          title: "Tari Kecak",
          desc: "Tari Kecak menjadi salah satu jenis tari kolosal yang melibatkan 50 sampai 150 orang penari. Jalan cerita Tari Kecak diambil dari tradisi Sanghyang dan bagian cerita Ramayana. Gerak penari Kecak akan diawali dengan masuknya para penari pria yang duduk membentuk lingkaran.Kemudian dilanjutkan dengan drama tari tentang perjuangan Rama, pasukan Hanoman dan burung Garuda untuk menyelamatkan Shinta dari sosok Rahwana. Dalam setiap pergantian penari di tiap adegan, para penari yang duduk membentuk lingkaran akan mengangkat kedua tangan dan menyerukan “cak cak ke cak cak ke” yang kemudian menjadi asal nama tarian ini. Dalam buku Keanekaragaman Seni Tari Nusantara (2012) oleh Resi Septiana Dewi dijelaskan bahwa gerakan penari Kecak tidak harus mengikuti pakem-pakem karena dalam tarian ini yang diutamakan adalah jalan cerita dan perpaduan suaranya.",
          imgInfo: rectangle,
          titleInfo: "Tari Kecak Daerah Bali",
          descInfo: "Tari kecak adalah saah satu tari khas bali yang menceritakan tentang bla bla bla bla...",
          loc: "Pecatu, Kuta Selatan, Badung, Bali",
          maps: "https://goo.gl/maps/WcUWffZ9hK4CmJEu5",
          waktu: "16:00 WITA",
          titleHarga: "Harga",
          descHarga: "Rp. 150.000",
          titleJumlah: "Jumlah",
          descJumlah: "200",
        };
    return (
        <div className={`${styles.autoLayout}`}>
            <p className='headline-small-semibold'>Detail Event</p>
            <div className='d-flex'>
                <div className='col-4'>
                    <div className={`${styles.layoutImg}`}>
                        <img src={detailEvent.img} alt=''/>
                    </div>
                </div>
                <div className='col-8'>
                    <div className={`${styles.desc}`}>
                        <p className='title-large-semibold' id='juduEvent'>{detailEvent.title}</p>
                        <p className='body-medium-reguler' id='deskripsiEvent'>{detailEvent.desc}</p>    
                    </div>
                </div>
            </div>
                
            <div className={`${styles.layoutDetail}`}>
                <p className='body-large-semibold' id='detail'>Detail Event</p>
                <div className='d-flex'>
                    <div className='col-8'>
                        <div className='info-lengkap' id='infoLengkap'>
                            <img src={language} alt=''/>
                            <span className={`body-medium-semibold ${styles.detailJudul}`}>Info Lengkap</span>
                            <div className={`${styles.layoutInfo}`}>
                                <div>
                                    <img src={detailEvent.imgInfo} alt=''/>
                                </div>
                                <div>
                                    <p className='body-medium-semibold'>{detailEvent.titleInfo}</p>
                                    <p className='body-small-regular'>{detailEvent.descInfo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div id='lokasi'>
                            <img src={lokasi} alt=''/>
                            <span className={`body-medium-semibold ${styles.detailJudul}`}>Lokasi</span>
                            <p className={`body-medium-regular ${styles.detailIsi}`}>{detailEvent.loc}</p>
                        </div>
                        <div id='maps'>
                            <img src={link} alt=''/>
                            <span className={`body-medium-semibold ${styles.detailJudul}`}>Link Google Maps</span>
                            <p className={`body-medium-regular ${styles.detailIsi}`}>{detailEvent.maps}</p>
                        </div>
                        <div id='waktu'>
                            <img src={alarm} alt=''/>
                            <span className={`body-medium-semibold ${styles.detailJudul}`}>Waktu</span>
                            <p className={`body-medium-regular ${styles.detailIsi}`}>{detailEvent.waktu}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.layoutTiket}`}>
                <div className='d-flex'>
                    <div className='col-11'>
                        <div id='tiketGratis'>
                            <span className='body-large-semibold'>Ticket Berbayar</span>
                            <br/>
                            <span className='body-small-regular'>Harga ticket aktif dan non aktif</span>    
                        </div>
                        {toggle ?
                            <div className={`${styles.isiTiket}`} id='tiketBayar'>
                                <div>
                                    <span className='body-small-regular'>{detailEvent.titleHarga}</span><br/>
                                    <span className='body-medium-regular'>{detailEvent.descHarga}</span>    
                                </div>
                                <div>
                                    <span className='body-small-regular'>{detailEvent.titleJumlah}</span><br/>
                                    <span className='body-medium-regular'>{detailEvent.descJumlah}</span>    
                                </div>
                            </div>
                        : <span></span>}
                    </div>

                    <div className={`col-1 ${styles.toggle}`} id='toggle'>
                        <Switch onClick={toggler}/>
                    </div>   
                </div>
            </div>

            <div className={`${styles.button}`}>
                <button type="button" className={`btn btn-light ${styles.btnHapus}`} id='hapus'>
                    <img src={del} alt=''/>
                    Hapus
                </button>
                <button type="button" className={`btn btn-dark ${styles.btnEdit}`} id='edit'>
                    <img src={edit} alt=''/>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default DetailEvent