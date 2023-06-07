import React from "react";
import styles from "./DetailArtikel.module.css";
import bg from "../../assets/images/bg.jpg";

const DetailArtikel = () => {
  const article = {
    title: "Tari Kecak",
    image: bg,
    description: `Tari Kecak menjadi salah satu jenis tari kolosal yang melibatkan 50 sampai 150 orang penari. Jalan cerita Tari Kecak diambil dari tradisi Sanghyang dan bagian cerita Ramayana. Gerak penari Kecak akan diawali dengan masuknya para penari pria yang duduk membentuk lingkaran.Kemudian dilanjutkan dengan drama tari tentang perjuangan Rama, pasukan Hanoman dan burung Garuda untuk menyelamatkan Shinta dari sosok Rahwana. \n\nDalam setiap pergantian penari di tiap adegan, para penari yang duduk membentuk lingkaran akan mengangkat kedua tangan dan menyerukan “cak cak ke cak cak ke” yang kemudian menjadi asal nama tarian ini. Dalam buku Keanekaragaman Seni Tari Nusantara (2012) oleh Resi Septiana Dewi dijelaskan bahwa gerakan penari Kecak tidak harus mengikuti pakem-pakem karena dalam tarian ini yang diutamakan adalah jalan cerita dan perpaduan suaranya.`,
  };
  const paragraphs = article.description.split("\n\n");
  return (
    <div id="detailArtikelContainer" className={styles.container}>
      <h1 id="detailArtikelTitle" className="headline-small-semibold mb-16">
        Detail Artikel
      </h1>
      <div className="d-flex justify-content-center align-items-center mb-24">
        <img
          id="articleImage"
          src={article.image}
          alt="article-img"
          className={`${styles.imgArticle} w-25`}
        />
      </div>
      <h4 id="articleTitle" className="title-large-semibold mb-24">
        {article.title}
      </h4>
      {paragraphs.map((paragraph, index) => (
        <p
          id={`articleParagraph_${index}`}
          className="body-medium-regular"
          key={index}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default DetailArtikel;
