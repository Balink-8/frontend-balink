import React from "react";
import userImg from "../../../assets/images/user.png";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import styles from "./NewUser.module.css";
import { useNavigate } from "react-router-dom";

const NewUser = ({ users }) => {
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
    <div id="new-user" className="new-user">
      <h1 id="new-user-title" className="title-large-semibold mb-16">
        Pengguna Baru
      </h1>
      {users &&
        users.map((user, index) => (
          <div
            id={`new-user-item-${index}`}
            className="d-flex gap-3 mb-16"
            key={index}
          >
            <img id={`new-user-img-${index}`} src={userImg} alt="product-img" />
            <div
              id={`new-user-content-${index}`}
              className="d-flex flex-column justify-content-center"
            >
              <h4
                id={`new-user-name-${index}`}
                className="body-medium-regular m-0"
              >
                {user.nama}
              </h4>
              <p
                id={`new-user-timestamp-${index}`}
                className={`${styles.subtext} body-small-regular m-0`}
              >
                {getTimeDifference(user.CreatedAt)} hari yang lalu
              </p>
            </div>
          </div>
        ))}
      <SeeMore id="new-user-see-more" to="akun" label="Lihat Semua" />
    </div>
  );
};

export default NewUser;
