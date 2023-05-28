import React from "react";
import TableAkun from "../../components/Table/TableAkun/TableAkun";

const Akun = () => {
  const userData = [
    {
      username: "NurHak88",
      pengguna: "Nur Hakiki",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai ",
    },
    {
      username: "MutSab75",
      pengguna: "Mutiara Sabrina",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai ",
    },
    {
      username: "MadMil45",
      pengguna: "Made Mila",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "1Tuhumi2",
      pengguna: "Tuhfah Humaira",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "33Cribel",
      pengguna: "Cristoper Bella",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "JosWhee3",
      pengguna: "Joseph Wheeler",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "YasJos99",
      pengguna: "Yasmien Joshua",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "Andlumu7",
      pengguna: "Andre Lumut",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "SanMase1",
      pengguna: "Sankurina Mase",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "BraSki12",
      pengguna: "Brahmana Yaski",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
    },
    {
      username: "tes",
      pengguna: "tes",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
    },
  ];
  return <TableAkun userData={userData} />;
};

export default Akun;
