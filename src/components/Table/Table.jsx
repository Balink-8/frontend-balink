import React, { useState } from 'react';
import keyboard_arrow_right from "../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../assets/icons/btn_arrow_left.svg"
import Vector from "../../assets/icons/Vector.svg"


import styles from "./Table.module.css";

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Halaman sebelumnya
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Mengubah jumlah item per halaman
  const changeItemsPerPage = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
     <div className={`${styles.containerfluid} container-fluid `} id='containerfluid'>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col-4">
            <div className= {styles.search}  id='search'>
              <input
                id='searchinput'
                type="text"
                className={`${styles.searchinput} form-control`} 
                placeholder="Search..." 
              />
              <img src={Vector} alt="" className={styles.Vector} />
            </div> 
          </div>
        </div>

        <div className="row mt-4 ms-2 text-center" >
          <div className="col-12">
              <div className="table-responsive">
                <table className="table " >
                  {/* Render data pada halaman saat ini */}
                  <thead  className={styles.thead} id='thead'>
                    <tr id='tr-table'>
                      <th>Username</th>
                      <th>Pengguna</th>
                      <th>Telephone</th>
                      <th>Alamat</th>
                      <th>Jenis Kelamin</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody} id='tbody'>
                    {currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.username}</td>
                        <td>{item.pengguna}</td>
                        <td>{item.telephone}</td>
                        <td>{item.alamat}</td>
                        <td>{item.jeniskelamin}</td>
                        <td>{item.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        </div>


        {/* Kotak angka untuk memilih jumlah item per halaman */}
        <div className= {`${styles.previous} row ms-2`} id='previous' >
          <div className="col-10">
            <span>Showing</span>
              <select
                  className={`${styles.itemsPerPage} ms-2 `} 
                  id="itemsPerPage"
                  value={itemsPerPage}
                  onChange={changeItemsPerPage}
              >
                  <option value={10}>10</option>
                  <option value={30}>20</option>
                  <option value={50}>50</option>
              </select>
              <span className="ms-2">of 50</span>
          </div>

          <div className="col-2">
            <button
              className= {`${styles.btnleft} col-2 me-1`} id='btnleft'
              onClick={previousPage}
              disabled={currentPage === 1}
              >
              <img src={btn_arrow_left} alt="" />
            </button>

              {/* tombol halaman */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button className={`${styles.btnprev} me-1`} 
                key={page}
                onClick={() => goToPage(page)}
                disabled={currentPage === page}
                >
                {page}
            </button>
            ))}   

            {/* Tombol halaman berikutnya */}
            <button
                className={styles.btnright}
                id='btnright'
                onClick={nextPage}
                disabled={currentPage === totalPages}
            >
                <img src={keyboard_arrow_right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Table;

  