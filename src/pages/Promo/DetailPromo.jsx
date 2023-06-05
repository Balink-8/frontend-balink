import React from "react";
import styles from "./Promo.module.css";
import Button from "../../elements/Button/Button";
import edit from "../../assets/icons/edit_square.svg"
import del from "../../assets/icons/delete.svg"
import { Link, useNavigate } from "react-router-dom";


const DetailPromo = () => {
    const navigate = useNavigate();

    const detailPromo = {
        nama: "BaliNyepi",
        desc: "Nyepi adalah hari suci bagi umat Hindu yang dirayakan setiap Tahun Baru Saka, menurut kalender yang digunakan oleh umat Hindu di Bali dan Lombok. Makna dari perayaan Hari Raya Nyepi bagi umat Hindu adalah meninggalkan aktivitas duniawi dalam keheningan dengan cara bermeditasi. Salah satu tujuan dari perayaan Hari Raya Nyepi adalah untuk menemukan jati diri demi mendapatkan keseimbangan diri dan alam semesta. Dan Balink memberikan kesempatan pada pengguna untuk menggunakan Promo nyepi ini selama 3 hari di mulai H-3 hari nyepi.",
        kode: "BALINKHAPPY",
        disc: "Rp. 15.000"
    };

    const handleNavigate = () => {
        navigate("/promo/edit");
    }

    return(
        <div className={`${styles.autoLayoutDetail}`}>
            <div className={`${styles.layoutDetail}`}>
                <p className="headline-small-semibold">Detail Promo</p>

                <div id="namaPromo">
                    <p className="title-medium-semibold">{detailPromo.nama}</p>
                    <p className="body-medium-regular">{detailPromo.desc}</p>
                </div>

                <div id="kodePromo">
                    <p className="body-small-regular">Kode Promo</p>
                    <p className="body-medium-semibold">{detailPromo.kode}</p>
                </div>

                <div id="potonganHarga">
                    <p className="body-small-regular">Potongan Harga</p>
                    <p className="body-medium-semibold">{detailPromo.disc}</p>
                </div>
            </div>

            <div className="d-flex justify-content-end gap-3 pt-5">
                <div className="d-grid col-3">
                    <Button label="Hapus" color="white" icon={del} onClick={() => alert("Promo berhasil di hapus!")}/>
                </div>
                <div className="d-grid col-3">
                    <Button label="Edit" color="brown" icon={edit}  onClick={handleNavigate}/>
                </div>
            </div>
        </div>
    )
}

export default DetailPromo