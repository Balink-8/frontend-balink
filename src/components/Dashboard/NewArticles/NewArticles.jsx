import React from "react";
import styles from "./NewArticles.module.css";
import kulinerUbud from "../../../assets/images/kuliner-ubud.png";
import SeeMore from "../../../elements/SeeMore/SeeMore";

const NewArticles = ({ articles }) => {
  return (
    <div className="new-article">
      <h1 className="title-large-semibold mb-16">Artikel Terbaru</h1>
      {articles.map((article, index) => (
        <div key={index} className="d-flex align-items-center gap-3 mb-16">
          <img
            className={styles.articlesImg}
            src={kulinerUbud}
            alt="article-img"
          />
          <div className="d-flex flex-column">
            <h4 className="body-medium-regular m-0">{article.title}</h4>
            <p className={`${styles.subtext} body-small-regular m-0`}>
              {article.date}
            </p>
          </div>
        </div>
      ))}
      <SeeMore label="Lihat Semua" to="artikel" />
    </div>
  );
};

export default NewArticles;
