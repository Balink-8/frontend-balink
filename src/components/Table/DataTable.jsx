import Table from './Table'
import demography from "../../assets/icons/demography.svg"


const data = [
    { username: 'NurHak88', pengguna: 'Nur Hakiki', telephone: '08123456789', alamat: 'Jl. Hidup Damai ', jeniskelamin: 'Laki-laki', action: '' },
    { username: 'MutSab75', pengguna: 'Mutiara Sabrina', telephone: '082121213434', alamat: 'Jl. Hidup Damai ', jeniskelamin: 'Laki-laki', action: ''},
    { username: 'MadMil45', pengguna: 'Made Mila', telephone: '08123456789', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Perempuan', action: <img src={demography} alt="" />},
    { username: '1Tuhumi2', pengguna: 'Tuhfah Humaira', telephone: '082121213434', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Perempuan', action: ''},
    { username: '33Cribel', pengguna: 'Cristoper Bella', telephone: '08123456789', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Laki-laki', action: ''},
    { username: 'JosWhee3', pengguna: 'Joseph Wheeler', telephone: '082121213434', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Laki-laki', action: ''},
    { username: 'YasJos99', pengguna: 'Yasmien Joshua', telephone: '08123456789', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Perempuan', action: ''},
    { username: 'Andlumu7', pengguna: 'Andre Lumut', telephone: '082121213434', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Laki-laki', action: ''},
    { username: 'SanMase1', pengguna: 'Sankurina Mase', telephone: '08123456789', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Laki-laki', action: ''},
    { username: 'BraSki12', pengguna: 'Brahmana Yaski', telephone: '082121213434', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Perempuan', action: ''},
    { username: 'tes', pengguna: 'tes', telephone: '082121213434', alamat: 'Jl. Hidup Damai', jeniskelamin: 'Perempuan', action: ''},
  
  ];

const DataTable = () => {

    
    return (
<>
<Table data={data} itemsPerPage={2} />
</>
    )
}

export default DataTable