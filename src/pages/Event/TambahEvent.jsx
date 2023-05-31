import React, {useState} from "react";
import styles from './Event.module.css'
import Input from '../../elements/Input/Input';
import Textarea from "../../elements/Textarea/Textarea";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import info from "../../assets/icons/language.svg";
import reset from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import { Switch } from "antd";

const TambahEvent = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
  }

  const [values, setValues] = useState({
    fotoEvent: '',
    judulEvent: '',
    deskripsiEvent: '', 
    lokasiEvent: '',
    linkGoogleEvent: '',
    waktuEvent: '',
    hargaEvent: '', 
    jumlahEvent: ''
  })

  const onSubmit = () => {
    const eventBaru = {
      fotoEvent: values.fotoEvent,
      judulEvent: values.judulEvent,
      deskripsiEvent: values.deskripsiEvent,
      lokasiEvent: values.lokasiEvent,
      linkGoogleEvent: values.linkGoogleEvent,
      waktuEvent: values.waktuEvent,
      hargaEvent: values.hargaEvent,
      jumlahEvent: values.jumlahEvent,
    }
    setValues({
      fotoEvent: '',
      judulEvent: '',
      deskripsiEvent: '', 
      lokasiEvent: '',
      linkGoogleEvent: '',
      waktuEvent: '',
      hargaEvent: '', 
      jumlahEvent: ''
    });
    setFile('');
    console.log(values)
  }

  const onReset = (e) => {
    setValues({
      fotoEvent: '',
      judulEvent: '',
      deskripsiEvent: '', 
      lokasiEvent: '',
      linkGoogleEvent: '',
      waktuEvent: '',
      hargaEvent: '', 
      jumlahEvent: ''
    });
    setFile('');
  }

  const handleOnChange = (e) => {
    setValues({
        ...values, 
        [e.target.name]: e.target.value
    }) 
  }

  const [file, setFile] = useState()
  const getFile = (e) => {
  setFile(URL.createObjectURL(e.target.files[0]))
  setValues({
    ...values, 
    [e.target.name]: e.target.value
  }) 
  }

  return (
    <div className="p-5">
      <h1 className="headline-small-semibold">Buat event baru</h1>
          
      <div className="row pb-4">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {/* upload foto */}
            <div className={styles.containerEvent}>
              <div className={styles.imgArea}>
                <img src = {file}/>
              </div>
              <div className="d-flex justify-content-center">
                <label 
                  htmlFor={'fotoEvent'}
                  className={styles.buttonMain}
                  style={{width:"50%"}}
                >
                  <img src={Filefoto} alt="filefoto"/>
                  <span className="body-medium-semibold"> Pilih Foto</span> 
                </label>
                <Input 
                  id={'fotoEvent'}
                  className={styles.inputPhoto}
                  type={'file'}
                  name={'fotoEvent'}
                  value={values.fotoEvent}
                  onChange={getFile}
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <p> select Your Photo Profile max 2mb.</p>
              </div>

            </div>
          </div>
        </div>
        {/* title + desc */}
        <div className="col">
          <div className="mt-3">
            <div className={styles.inputBox}>
              <Input 
                type={'text'}
                required={'required'}
                placeholder={'masukkan judul event'}
                className={styles.input}
                id={'judulEvent'}
                name={'judulEvent'}
                value={values.judulEvent}
                onChange ={handleOnChange}
                />
              <label className={styles.inputTitle}>Judul Event</label>
            </div>
          </div>

          <div className="mt-3">
            <div className={styles.inputBox}>
              <Textarea 
                rows={11}
                required={'required'}
                placeholder={'masukkan deskripsi event'}
                className={styles.input}
                id={'deskripsiEvent'}
                name={'deskripsiEvent'}
                value={values.deskripsiEvent}
                onChange ={handleOnChange}
                />
              <label className={styles.inputTitle}>Deskripsi</label>
            </div>
          </div>
        </div>
      </div>
      
      {/* detail event */}
      <div className="pb-4">
        <div className={styles.containerEvent}>
          <div className="container">
            <h1 className="body-large-semibold">Detail Event</h1>

            <div className="row py-3">
              <div className="col-lg-6">
                <img src={info} alt="info" />
                <span className="body-medium-semibold"> Info Lengkap</span>
                <button type="button" className={styles.buttonMain} style={{width:"100%"}}>
                  + Tambah Artikel 
                </button>
              </div>

              <div className="col-lg-6">
                <div className="m-2">
                  <div className={styles.inputBox}>
                    <Input 
                      type={'text'}
                      required={'required'}
                      placeholder={'masukkan alamat lokasi'}
                      className={styles.input}
                      id={'lokasiEvent'}
                      name={'lokasiEvent'}
                      value={values.lokasiEvent}
                      onChange ={handleOnChange}
                    />
                     <label className={styles.inputTitle}>Lokasi</label>
                  </div>
                </div>

                <div className="m-2">
                  <div className={styles.inputBox}>
                    <Input 
                      type={'text'}
                      required={'required'}
                      placeholder={'masukkan link Google Maps lokasi'}
                      className={styles.input}
                      id={'linkGoogleEvent'}
                      name={'linkGoogleEvent'}
                      value={values.linkGoogleEvent}
                      onChange ={handleOnChange}
                    />
                    <label className={styles.inputTitle}>Link Google Maps</label>
                  </div>
                </div>

                <div className="m-2">
                  <div className={styles.inputBox}>
                    <Input 
                      type={'text'}
                      required={'required'}
                      placeholder={'00:00'}
                      className={styles.input}
                      id={'waktuEvent'}
                      name={'waktuEvent'}
                      value={values.waktuEvent}
                      onChange ={handleOnChange}
                    />
                    <label className={styles.inputTitle}>Waktu</label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* berbayar */}
      <div className="pb-4">
        <div className={styles.containerEvent}>
          <div className="container">
            <h1 className="body-large-semibold">Ticket Berbayar</h1>

            <div className="row">
              <div className="col-lg-6">
                <p className="body-smaill-regular">Harga ticket aktif dan non aktif</p>
              </div>

              <div className="col-lg-6">
                <div className="d-flex justify-content-end">
                  <Switch 
                    onClick={toggler}
                  />
                </div>
              </div>
            </div>
          {toggle ? 
            <div className="row py-3">
              <div className="col-lg-6">
                <div className="m-2">
                  <div className={styles.inputBox}>
                    <Input 
                      type={'text'}
                      required={'required'}
                      placeholder={'masukkan harga jenis'}
                      className={styles.input}
                      id={'hargaEvent'}
                      name={'hargaEvent'}
                      value={values.hargaEvent}
                      onChange ={handleOnChange}
                      />
                    <label className={styles.inputTitle}>Harga</label>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="m-2">
                  <div className={styles.inputBox}>
                    <Input 
                      type={'text'}
                      required={'required'}
                      placeholder={'masukkan jumlah'}
                      className={styles.input}
                      id={'jumlahEvent'}
                      name={'jumlahEvent'}
                      value={values.jumlahEvent}
                      onChange ={handleOnChange}
                    />
                    <label className={styles.inputTitle}>Jumlah</label>
                  </div>
                </div>
              </div>
            </div>
            :
            <div></div>
            }

          </div>
        </div>
      </div>

      {/* button */}
      <div className="row justify-content-end py-3">
        <div className="col-lg-6">
          <button 
            type="submit" 
            className={styles.buttonReset} 
            style={{width:"45%"}}
            onClick={onReset}>
              <img src={reset} alt="reset"/>
              <span className="Body-Medium-SemiBold"> Reset</span> 
          </button>
            <button 
              type="submit" 
              className={styles.buttonMain} 
              style={{width:"45%"}}
              onClick={onSubmit}>
                <img src={save} alt="save"/>
                <span className="Body-Medium-SemiBold"> Simpan</span> 
            </button>
        </div>
      </div>
      
    </div>
  );
};

export default TambahEvent;