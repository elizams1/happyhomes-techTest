import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input
} from '@chakra-ui/react';
import './TimeSheet.css';
import { FaSortUp, FaSortDown} from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function TimeSheet() {

  const [karyawan, setKaryawan] = useState([]);
  const [kegiatan,setKegiatan] = useState([]);

  useEffect(()=>{
    axios
      .get("http://localhost:5000/users/1")
      .then(function(res){
          console.log(res);
          console.log(res.data);
          setKaryawan(res.data);
      })
      .catch(function(err){
        console.log(err);
      })
  },[]);

  useEffect(()=>{
     axios
      .get("http://localhost:5000/kegiatans")
      .then(function(res){
          console.log(res);
          console.log(res.data);
          console.log(res.data[0]);
          let items = []
           for (let number = 0; number<res.data.length; number++){
            items.push(res.data[number]);
           }
          setKegiatan(items);
      })
      .catch(function(err){
        console.log(err);
      })
  },[])

  return (
    <>
      <div className="timeSheet-page">
        <div className='timeSheet-one'>
          <div>
            <p>Nama Karyawan</p>
            <p>{karyawan.name}</p>
          </div>
          <div>
            <p>Rate</p>
            <p>Rp. {karyawan.rate} /Jam</p>
          </div>
        </div>
        <div className="timeSheet-two">
          <div>
            <p>Daftar Kegiatan</p>
            <button><IoMdAddCircleOutline/>Tambah Kegiatan</button>
          </div>
          <div>
            <Input type='text' />
            <button><IoFilter/></button>
          </div>
        </div>
        <div>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Judul Kegiatan</Th>
                  <Th>Proyek</Th>
                  <Th>Tanggal Mulai</Th>
                  <Th>Tanggal Berakhir</Th>
                  <Th>Waktu Mulai</Th>
                  <Th>Waktu Berakhir</Th>
                  <Th>Durasi</Th>
                  <Th>Aksi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {kegiatan.map(item =>
                  <Tr>
                    <Td>{item.judul_kegiatan}</Td>
                    <Td>{item.nama_proyek}</Td>
                    <Td>{new Date(item.tanggal_mulai).toLocaleDateString()}</Td>
                    <Td>{new Date(item.tanggal_berakhir).toLocaleDateString()}</Td>
                    <Td>{new Date(item.waktu_mulai).toLocaleTimeString()}</Td>
                    <Td>{item.waktu_berakhir}</Td>
                    <Td>0</Td>
                    <Td>
                      <button>
                        <RiEdit2Fill/>
                      </button>
                      <button>
                        <MdDelete/>
                      </button>
                    </Td>
                  </Tr>
                )}
                
              </Tbody>
            </Table>
          </TableContainer>
        </div>

      </div>
      
    </>
  )
}

export default TimeSheet