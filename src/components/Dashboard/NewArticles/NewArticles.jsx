import React from "react";
import styles from "./NewArticles.module.css";
import kulinerUbud from "../../../assets/images/kuliner-ubud.png";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import { useNavigate } from "react-router-dom";

const NewArticles = ({ articles }) => {
  const navigate = useNavigate();
  const todayDate = new Date();

  const getTimeDifference = (createdAt) => {
    const userDate = new Date(createdAt);
    const diffInMilliseconds = Math.abs(todayDate - userDate);
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const handleDetail = (id) => {
    navigate(`/artikel/detail/${id}`);
  };

  return (
    <div id="new-article" className="new-article">
      <h1 id="new-article-title" className="title-large-semibold mb-16">
        Artikel Terbaru
      </h1>
      {articles &&
        articles.map((article, index) => (
          <div
            id={`new-article-item-${index}`}
            key={index}
            className="d-flex align-items-center gap-3 mb-16"
            onClick={() => {
              handleDetail(article.ID);
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              id={`new-article-img-${index}`}
              className={styles.articlesImg}
              src={kulinerUbud}
              alt="article-img"
            />
            <div
              id={`new-article-content-${index}`}
              className="d-flex flex-column"
            >
              <h4
                id={`new-article-title-${index}`}
                className="body-medium-regular m-0"
              >
                {article.judul}
              </h4>
              <p
                id={`new-article-date-${index}`}
                className={`${styles.subtext} body-small-regular m-0`}
              >
                {getTimeDifference(article.CreatedAt)} hari yang lalu
              </p>
            </div>
          </div>
        ))}
      <SeeMore id="new-article-see-more" label="Lihat Semua" to="artikel" />
    </div>
  );
};

export default NewArticles;
