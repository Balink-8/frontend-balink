import React, { useEffect } from "react";
import styles from "./DetailKategori.module.css";
import Button from "../../elements/Button/Button";
import edit from "../../assets/icons/edit_square_white.svg";
import hapus from "../../assets/icons/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";


const DetailKategori = () => {
  const navigate = useNavigate();
  const { response: kategori, error, loading, get, del } = useApi();
  const { id } = useParams();

  useEffect(() => { 
    get(`https://6486e617beba6297278f6c94.mockapi.io/kategori/${id}`).catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  const onDelete = () => {
    del(
      `https://6486e617beba6297278f6c94.mockapi.io/kategori/${id}`
    );
    navigate(-1);
  };
  console.log(id)
 
  
  return (
    <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (

    <div className={styles.container}>
      <h1 className="headline-small-semibold mb-16">Detail Kategori</h1>
      <h4 className="title-large-semibold mb-24 mt-5">{kategori?.namaKategori}</h4>
      <p className="body-medium-regular">{kategori?.deskripsiKategori}</p>
      

<div className="d-flex justify-content-end gap-3 pt-5">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={onDelete}
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/kategori/edit/${id}`)}
              />
            </div>
          </div>
    </div>
    )}

    
    </div>
  );
};

export default DetailKategori;
