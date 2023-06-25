import React, { useState } from "react";
import TableTransaksiEvent from "../../components/Table/TableTransaksi/TableTransaksiEvent/TableTransaksiEvent";
import TableTransaksiProduk from "../../components/Table/TableTransaksi/TableTransaksiProduk/TableTransaksiProduk";
import TableSearch from "../../elements/TableSearch/TableSearch";
import Button from "../../elements/Button/Button";
import local_mall from "../../assets/icons/local_mall.svg";
import theater_comedy from "../../assets/icons/theater_comedy.svg";

const Transaksi = () => {
  const [activeButton, setActiveButton] = useState("produk");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="d-flex">
        <TableSearch />
        <div className="d-flex gap-4">
          <Button
            label="Produk"
            color={activeButton === "produk" ? "brown" : "white"}
            icon={local_mall}
            onClick={() => handleButtonClick("produk")}
          />
          <Button
            label="Event"
            color={activeButton === "event" ? "brown" : "white"}
            icon={theater_comedy}
            onClick={() => handleButtonClick("event")}
          />
        </div>
      </div>

      {activeButton === "produk" && <TableTransaksiProduk />}
      {activeButton === "event" && <TableTransaksiEvent />}
    </div>
  );
};

export default Transaksi;
