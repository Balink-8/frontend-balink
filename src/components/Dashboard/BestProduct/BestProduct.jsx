import React from "react";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import styles from "./BestProduct.module.css";
import pieSusu from "../../../assets/images/pie-susu.png";

const BestProduct = ({ products }) => {
  return (
    <div className="best-product">
      <div className="d-flex align-items-center justify-content-between mb-16">
        <div className="d-flex flex-column justify-items-center">
          <h1 className="title-large-semibold m-0">Produk Terlaris</h1>
          <p className={`${styles.subtext} body-medium-regular m-0`}>
            10k visitor
          </p>
        </div>
        <SeeMore label="Lihat Semua" to="produk" />
      </div>
      {products.map((product, index) => (
        <div className="d-flex align-items-center gap-3 mb-16" key={index}>
          <img src={pieSusu} alt="product-img" />
          <div className="d-flex flex-column me-auto">
            <h4 className="body-large-semibold m-0">{product.name}</h4>
            <p className={`${styles.subtext} body-medium-regular m-0`}>
              {product.store}
            </p>
          </div>
          <p className="body-medium-semibold m-0">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
