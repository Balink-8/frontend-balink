import React from "react";
import TableAkun from "../../components/Table/TableAkun/TableAkun";

const Akun = () => {
  const userData = [
    {
      id: 1,
      username: "NurHak88",
      pengguna: "Nur Hakiki",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai ",
      email: "nurhak88@gmail.com",
      password: "12345678",
    },
    {
      id: 2,
      username: "MutSab75",
      pengguna: "Mutiara Sabrina",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai ",
      email: "mutsab75@gmail.com",
      password: "12345678",
    },
    {
      id: 3,
      username: "MadMil45",
      pengguna: "Made Mila",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "madmil45@gmail.com",
      password: "12345678",
    },
    {
      id: 4,
      username: "1Tuhumi2",
      pengguna: "Tuhfah Humaira",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "tuhumi12@gmail.com",
      password: "12345678",
    },
    {
      id: 5,
      username: "33Cribel",
      pengguna: "Cristoper Bella",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "cribel33@gmail.com",
      password: "12345678",
    },
    {
      id: 6,
      username: "JosWhee3",
      pengguna: "Joseph Wheeler",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "joswhee3@gmail.com",
      password: "12345678",
    },
    {
      id: 7,
      username: "YasJos99",
      pengguna: "Yasmien Joshua",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "yasjos99@gmail.com",
      password: "12345678",
    },
    {
      id: 8,
      username: "Andlumu7",
      pengguna: "Andre Lumut",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 9,
      username: "SanMase1",
      pengguna: "Sankurina Mase",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 10,
      username: "BraSki12",
      pengguna: "Brahmana Yaski",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 11,
      username: "tes",
      pengguna: "tes",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
  ];
  return (
    <div>
      <TableAkun userData={userData} />
    </div>
  );
};

export default Akun;
