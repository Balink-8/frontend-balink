import React from "react";
import userImg from "../../../assets/images/user.png";
import SeeMore from "../../../elements/SeeMore/SeeMore";
import styles from "./NewUser.module.css";

const NewUser = ({ users }) => {
  return (
    <div className="new-user">
      <h1 className="title-large-semibold mb-16">Pengguna Baru</h1>
      {users.map((user, index) => (
        <div className="d-flex gap-3 mb-16" key={index}>
          <img src={userImg} alt="product-img" />
          <div className="d-flex flex-column justify-content-center">
            <h4 className="body-medium-regular m-0">{user.name}</h4>
            <p className={`${styles.subtext} body-small-regular m-0`}>
              {user.timestamp}
            </p>
          </div>
        </div>
      ))}
      <SeeMore to="akun" label="Lihat Semua" />
    </div>
  );
};

export default NewUser;
