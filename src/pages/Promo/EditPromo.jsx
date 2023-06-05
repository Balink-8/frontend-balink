import React, { useState } from "react";
import styles from "./Promo.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";
import cancel from "../../assets/icons/cancel.svg";
import save from "../../assets/icons/save.svg";
import { useNavigate } from "react-router-dom";

const EditPromo = () => {
    const navigate = useNavigate();
    
    const editPromo = {
        namaPromo: "BaliNyepi",
        deskripsiPromo: "Nyepi adalah hari suci bagi umat Hindu yang dirayakan setiap Tahun Baru Saka, menurut kalender yang digunakan oleh umat Hindu di Bali dan Lombok. Makna dari perayaan Hari Raya Nyepi bagi umat Hindu adalah meninggalkan aktivitas duniawi dalam keheningan dengan cara bermeditasi. Salah satu tujuan dari perayaan Hari Raya Nyepi adalah untuk menemukan jati diri demi mendapatkan keseimbangan diri dan alam semesta. Dan Balink memberikan kesempatan pada pengguna untuk menggunakan Promo nyepi ini selama 3 hari di mulai H-3 hari nyepi.",
        kodePromo: "BALINKHAPPY",
        potonganHarga: "Rp. 15.000",
    }

    const handleNavigate = () => {
        navigate("/promo/detail");
    }

    return (
        <div className={`${styles.autoLayoutTambah}`}>
            <div className={`${styles.layoutTambah}`}>
                <p className="headline-small-semibold">Edit Promo</p>
                <div className={`${styles.input}`} id="namaPromo">
                    <div className={`${styles.title}`}>
                        <div>
                            <p className="title-large-semibold">Nama Promo</p>
                        </div>
                        <div>
                            <p className={`${styles.titleRight}`}>Wajib</p>
                        </div>
                    </div>

                    <p className="body-small-regular">
                        Ketik nama promo maksimal 70 kata dengan kalimat yang 
                        menarik agar pembeli dapat menemukan promo dari nama promo, 
                        kode promo, merek dan Deskripsi promo.
                    </p>

                    <div>
                        <Input
                            type={"text"}
                            id={"editNamaPromo"}
                            label={"Nama Promo"}
                            placeholder={"Masukkan Nama Promo"}
                            name={"namaPromo"}
                            value={editPromo.namaPromo}
                        /><br/>
                    </div>
                </div>

                <div className={`${styles.input}`} id="deskripsiPromo">
                    <div className={`${styles.title}`}>
                        <div>
                            <p className="title-large-semibold">Deskripsi Promo</p>
                        </div>
                        <div>
                            <p className={`${styles.titleRight}`}>Wajib</p>
                        </div>
                    </div>

                    <p className="body-small-regular">
                        Tuliskan deskripsi promomu untuk disajikan dalam 
                        bentuk penjelasn yang lebih rinci.
                    </p>

                    <div className={styles.inputBox}>
                        <Textarea
                            rows={4}
                            required={"required"}
                            placeholder={"Masukkan Deskripsi Promo"}
                            className={styles.textArea}
                            id={"editDeskripsiPromo"}
                            name={"deskripsiPromo"}
                            value={editPromo.deskripsiPromo}   
                        />
                        <label className={styles.inputTitle}>Deskripsi Promo</label>
                    </div>
                </div>

                <div className={`${styles.input}`} id="kodePromo">
                    <div className={`${styles.title}`}>
                        <div>
                            <p className="title-large-semibold">Kode Promo</p>
                        </div>
                        <div>
                            <p className={`${styles.titleRight}`}>Wajib</p>
                        </div>
                    </div>

                    <p className="body-small-regular">
                        Kode promo digunakan untuk memudahkan bagi pengguna 
                        dari promo yang sedang berlangsung.
                    </p>

                    <div>
                        <Input
                            type={"text"}
                            id={"editKodePromo"}
                            label={"Kode Promo"}
                            placeholder={"Masukkan Kode Promo"}
                            name={"kodePromo"}
                            value={editPromo.kodePromo}
                        /><br/>
                    </div>
                </div>

                <div className={`${styles.input}`} id="potonganHarga">
                    <div className={`${styles.title}`}>
                        <div>
                            <p className="title-large-semibold">Potongan Harga</p>
                        </div>
                        <div>
                            <p className={`${styles.titleRight}`}>Wajib</p>
                        </div>
                    </div>

                    <p className="body-small-regular">
                        Potongan Harga menunjukkan bahwa promo yang sedang 
                        berlangsung dengan potongan harga yang sudah di tentukan.
                    </p>

                    <div>
                        <Input
                            type={"text"}
                            id={"editPotonganHarga"}
                            label={"Potongan Harga"}
                            placeholder={"Rp. 0"}
                            name={"potonganHarga"}
                            value={editPromo.potonganHarga}
                        /><br/>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-5">
                <div className="d-grid col-3">
                    <Button label="Batal" color="white" icon={cancel} onClick={handleNavigate}/>
                </div>
                <div className="d-grid col-3">
                    <Button label="Simpan" color="brown" icon={save} onClick={() => alert("Promo berhasil di ubah!")}/>
                </div>
            </div>
        </div>
    )
}

export default EditPromo