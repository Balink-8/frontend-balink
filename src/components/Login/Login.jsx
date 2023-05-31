import styles from './Login.module.css'
import Logo from '../../assets/images/Balink 1.png'
import Gambar from '../../assets/images/bg.jpg'
import Input from '../../elements/Input/Input'
import IconVisibility from '../../assets/icons/visibility_off.svg'
import IconVisibilityOpen from '../../assets/images/eyes3.png'
import { useState } from 'react'
const Login = () => {
  
  const [icon, setIcon] = useState(IconVisibility)
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
    if(icon === IconVisibility) {
       setIcon(IconVisibilityOpen)
    }
    else {
       setIcon(IconVisibility)
    }
  };



   return (
      <div className="wrapper">
         <div className={styles.backgroundImage}>
            <img src={Gambar} className={styles.gambar}/>
         </div>
      <form className={styles.form}>
         <div className={styles.logo} id='logo'>
            <img src={Logo} className={styles.imageLogo}/>
            <p className='body-large-regular mt-2 text-center'>Nikmati kegiatan dan wisata anda dengan <span className='body-large-semibold'>Balink</span>. Aman, Nyaman dan Mudah untuk kita bersama.</p>
         </div>
         <div className='input-patern' id='input-patern'>
            <div className='username'>
               <label className='body-large-semibold label'>Username</label>
               <Input 
               type="text"
               className={styles.input}
               placeholder="Masukan Username"
               id="username"
               name="username"
               />
            </div>
            <label className='body-large-semibold label'>Password</label>
            <div className={styles.password}>
               <Input 
               type={showPassword ? 'text' : 'password'}
               className={styles.input}
               placeholder="Masukan Password"
               id="password"
               name="password"
               value={password}
               onChange={handlePasswordChange}
               />
               <img src={icon} className={styles.iconvisibility} onClick={toggleShowPassword}/>
            </div>
            <div className={styles.button}>
               <button className={styles.btnLogin}>Masuk</button>
            </div>
         </div>
         </form>
      </div>
   )
}

export default Login