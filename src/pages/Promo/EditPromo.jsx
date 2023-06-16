import React, { useState, useEffect } from "react";
import styles from "./Promo.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";
import cancel from "../../assets/icons/cancel.svg";
import save from "../../assets/icons/save.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";

const EditPromo = () => {
    const navigate = useNavigate();
    const { response: promo, loading, error, get, put } = useApi();
    const [values, setValues] = useState ({
        NamaPromo: "",
        DeskripsiPromo: "",
        KodePromo: "",
        PotonganHarga: "",
    });
    const { id } = useParams();

    useEffect(() => {
        get(
          `https://648179fd29fa1c5c503172c3.mockapi.io/promo/${id}`
        ).catch((error) => {
          // Handle error
          console.error(error);
        });
    }, []);

    useEffect(() => {
        if (promo) {
            setValues({
                NamaPromo: promo.NamaPromo,
                DeskripsiPromo: promo.DeskripsiPromo,
                KodePromo: promo.KodePromo,
                PotonganHarga: promo.PotonganHarga,
          });
        }
    }, [promo]);

    const paragraphs = values.DeskripsiPromo?.split("\n\n");

    const onSubmit = () => {
        put(
          `https://648179fd29fa1c5c503172c3.mockapi.io/promo/${id}`,
          values
        );
        navigate(-1);
    };
    
    const onCancel = () => {
        navigate(-1);
    };
    
    const handleOnChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
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
                                    name={"NamaPromo"}
                                    value={values.NamaPromo}
                                    onChange={handleOnChange}
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
                                    name={"DeskripsiPromo"}
                                    value={values.DeskripsiPromo}
                                    onChange={handleOnChange}   
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
                                    name={"KodePromo"}
                                    value={values.KodePromo}
                                    onChange={handleOnChange}
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
                                    type={"number"}
                                    id={"editPotonganHarga"}
                                    label={"Potongan Harga"}
                                    placeholder={"Rp. 0"}
                                    name={"PotonganHarga"}
                                    value={values.PotonganHarga}
                                    onChange={handleOnChange}
                                /><br/>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end gap-3 pt-5">
                        <div className="d-grid col-3">
                            <Button label="Batal" color="white" icon={cancel} onClick={onCancel}/>
                        </div>
                        <div className="d-grid col-3">
                            <Button label="Simpan" color="brown" icon={save} onClick={onSubmit}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditPromo