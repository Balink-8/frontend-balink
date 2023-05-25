import logo from '../../assets/logo/Balink 2 1.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import person from '../../assets/icons/person.svg'
import theater_comedy from '../../assets/icons/theater_comedy.svg'
import receipt_long from '../../assets/icons/receipt_long.svg'
import local_activity from '../../assets/icons/local_activity.svg'
import article from '../../assets/icons/article.svg'
import home from '../../assets/icons/home.svg'
import settings from '../../assets/icons/settings.svg'
import logout from '../../assets/icons/logout.svg'
import storefront from '../../assets/icons/storefront.svg'
import folder_copy from '../../assets/icons/folder_copy.svg'
import './Sidebar.css'

const Sidebar = () => {
    return(
        <div className='sidebar d-flex'>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: 280, height:"100vh"}}>
                <a href="/" className="d-flex align-items-center gap-5 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt="img"/>
                </a><br/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href='#' className="nav-link d-flex align-item-center gap-3 active" aria-current="page">
                            <img src={dashboard} alt='' className='img'/>
                            <span className='text-white' id='dashboard'>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={person} alt='' className='img'/>
                            <span id='akun'>Akun</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={theater_comedy} alt='' className='img'/>
                            <span id='event'>Event</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={storefront} alt='' className='img'/>
                            <span id='produk'>Produk</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={folder_copy} alt='' className='img'/>
                            <span id='kategori'>Kategori</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={receipt_long} alt='' className='img'/>
                            <span id='transaksi'>Transaksi</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={local_activity} alt='' className='img'/>
                            <span id='promo'>Promo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={article} alt='' className='img'/>
                            <span id='artikel'>Artikel</span>
                        </a>
                    </li>
                    <hr/>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-3">
                            <img src={home} alt='' className='img'/>
                            <span id='profile'>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link d-flex align-item-center gap-2">
                            <img src={settings} alt='' className='img'/>
                            <span id='pengaturan'>Pengaturan</span>
                        </a>
                    </li>
                </ul>
                <div className="exit">
                    <a href="#" className="d-flex align-item-center gap-3 text-decoration-none " >
                        <img src={logout} alt='' className='img'/>
                        <span className='text-danger' id='keluar'>Keluar</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar