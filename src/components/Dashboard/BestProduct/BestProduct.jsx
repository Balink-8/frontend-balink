import React, { useEffect } from "react";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import styles from "./BestProduct.module.css";
import pieSusu from "../../../assets/images/pie-susu.png";
import useApi from "../../../utils/useApi";
import { formatCurrency } from "../../../utils/CurrencyFormatter";
import { useNavigate } from "react-router-dom";

const BestProduct = ({ products }) => {
  const { response: kategoriProduk, loading, error, get } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    get("/kategori_produk").catch((error) => {
      console.error(error);
    });
  }, []);

  const handleDetail = (id) => {
    navigate(`/produk/detail/${id}`);
  };

  return (
    <div id="best-product" className="best-product">
      <div
        className="d-flex align-items-center justify-content-between mb-16"
        id="best-product-header"
      >
        <div className="d-flex flex-column justify-items-center">
          <h1 id="best-product-title" className="title-large-semibold m-0">
            Produk Terbaru
          </h1>
        </div>
        <SeeMore id="best-product-see-more" label="Lihat Semua" to="produk" />
      </div>
      {products &&
        products.map((product, index) => (
          <div
            id={`best-product-item-${index}`}
            className="d-flex align-items-center gap-3 mb-16"
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDetail(product.ID);
            }}
          >
            <img src={pieSusu} alt="product-img" />
            <div className="d-flex flex-column me-auto">
              <h4
                className="body-large-semibold m-0"
                id={`best-product-name-${index}`}
              >
                {product.nama}
              </h4>
              <p className={`${styles.subtext} body-medium-regular m-0`}>
                {
                  kategoriProduk?.data.data.find(
                    (kategori) => kategori.ID === parseInt(product.kategori_id)
                  )?.nama
                }
              </p>
            </div>
            <p
              className="body-medium-semibold m-0"
              id={`best-product-price-${index}`}
            >
              {formatCurrency(product.harga)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default BestProduct;
