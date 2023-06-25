import React, { useEffect } from "react";
import styles from "./Profil.module.css";
import Logo from "../../assets/images/Balink 1.png";
import Button from "../../elements/Button/Button";
import Edit from "../../assets/icons/edit_square_white.svg";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import Spinner from "../../components/Spinner/Spinner";
import useApi from "../../utils/useApi";
import { useNavigate } from "react-router-dom";

const Profil = () => {
  const { response, loading, error, get } = useApi();
  useEffect(() => {
    get("/admin").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  const profil = response?.data;

  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div className={styles.wrapper}>
          {/* Judul */}
          <div className={styles.judul}>
            <div className={styles.sideLeft}>
              <img src={Logo} className={styles.logo} alt="Logo" id="logo" />
            </div>
            <div className={styles.sideRight}>
              <h2 className="title-medium-bold" id="profilNama">
                {profil?.nama}
              </h2>
              <p className="title-small-regular" id="profilDeskripsi">
                {profil?.deskripsi}
              </p>
            </div>
          </div>

          {/* Informasi */}
          <div className={styles.informasi}>
            <h2 className="title-medium-bold" id="informasiPerusahaanTitle">
              Informasi Perusahaan
            </h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideLeftInformasi}>
                <div className="email" id="emailInformasi">
                  <p className={`body-large-regular ${styles.label}`}>
                    Email Adress
                  </p>
                  <p className="body-large-regular">{profil?.email}</p>
                </div>
                <div className="phone" id="phoneInformasi">
                  <p className={`body-large-regular ${styles.label}`}>Phone</p>
                  <p className="body-large-regular">{profil?.no_telepon}</p>
                </div>
              </div>
              <div className={styles.sideRightInformasi}>
                <div className={styles.whatsapp} id="whatsappInformasi">
                  <p className={`body-large-regular ${styles.label}`}>
                    Whatsapp
                  </p>
                  <p className="body-large-regular">{profil?.no_telepon}</p>
                </div>
                <div className={styles.instagram} id="instagramInformasi">
                  <p className={`body-large-regular ${styles.label}`}>
                    Instagram
                  </p>
                  <p className="body-large-regular">{profil?.instagram}</p>
                </div>
                <div className={styles.facebook} id="facebookInformasi">
                  <p className={`body-large-regular ${styles.label}`}>
                    Facebook
                  </p>
                  <p className="body-large-regular">{profil?.facebook}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.informasi}>
            <h2 className="title-medium-bold">Alamat Perusahaan</h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideLeftInformasi}>
                <div className="email">
                  <p className={`body-large-regular ${styles.label}`}>Negara</p>
                  <p className="body-large-regular">{profil?.negara}</p>
                </div>
                <div className="kode-pos">
                  <p className={`body-large-regular ${styles.label}`}>
                    Kode Pos
                  </p>
                  <p className="body-large-regular">{profil?.kode_pos}</p>
                </div>
              </div>
              <div className={styles.sideRightInformasi}>
                <div className={styles.whatsapp}>
                  <p className={`body-large-regular ${styles.label}`}>Alamat</p>
                  <p className="body-large-regular">{profil?.alamat}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.informasi}>
            <h2 className="title-medium-bold" id="rekeningPerusahaanTitle">
              Rekening Perusahaan
            </h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideLeftInformasi}>
                {profil?.rekening_bca !== "0" && (
                  <div className="email" id="bcaInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Central Asia (BCA)
                    </p>
                    <p className="body-large-regular">{profil?.rekening_bca}</p>
                  </div>
                )}
                {profil?.rekening_mandiri !== "0" && (
                  <div className="phone" id="mandiriInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Mandiri
                    </p>
                    <p className="body-large-regular">
                      {profil?.rekening_mandiri}
                    </p>
                  </div>
                )}
                {profil?.rekening_bni !== "0" && (
                  <div className="phone" id="bniInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Negara Indonesia (BNI)
                    </p>
                    <p className="body-large-regular">{profil?.rekening_bni}</p>
                  </div>
                )}
                {profil?.rekening_bri !== "0" && (
                  <div className="phone" id="briInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Rakyat Indonesia (BRI)
                    </p>
                    <p className="body-large-regular">{profil?.rekening_bri}</p>
                  </div>
                )}
              </div>

              <div className={styles.sideRightInformasi}>
                {profil?.rekening_btn !== "0" && (
                  <div className="phone" id="btnInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Tabungan Negara (BTN)
                    </p>
                    <p className="body-large-regular">{profil?.rekening_btn}</p>
                  </div>
                )}
                {profil?.rekening_seabank !== "0" && (
                  <div className="phone" id="seabankInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Seabank
                    </p>
                    <p className="body-large-regular">
                      {profil?.rekening_seabank}
                    </p>
                  </div>
                )}
                {profil?.rekening_bpd_bali !== "0" && (
                  <div className="phone" id="bpdbaliInformasi">
                    <p className={`body-large-regular ${styles.label}`}>
                      Bank Pembangunan Daerah Bali (BPD Bali)
                    </p>
                    <p className="body-large-regular">
                      {profil?.rekening_bpd_bali}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center gap-3 pt-4">
            <div className="d-grid col-3">
              <Button
                label="Edit Profil"
                color="brown"
                icon={Edit}
                onClick={() => navigate("/profile/edit")}
                id="editProfilButton"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
