import React, {useState, useEffect} from 'react';
import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react';
import './TimeSheet.css';

import { IoMdAddCircleOutline } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import TheModal from '../TheModal/TheModal.js';

function format( time){
  // console.log(time);
  // eslint-disable-next-line no-unused-vars
  const [hour, minute, second] = time.split(':');
  // console.log(hour);
  return `${hour}:${minute}`
}

function TimeSheet() {
  const [karyawan, setKaryawan] = useState([]);
  const [kegiatan,setKegiatan] = useState([]);
  const [kegiatanEdit, setKegiatanEdit] = useState([]); 
  const [proyek,setProyek] = useState([]);

  const [judul_kegiatan, setJudulKegiatan] = useState("");
  const [nama_proyek, setNamaProyek] = useState("");
  const [waktu_mulai, setWaktuMulai] = useState("");
  const [waktu_berakhir, setWaktuBerakhir] = useState("");
  const [tanggal_mulai, setTanggalMulai] = useState("");
  const [tanggal_berakhir, setTanggalBerakhir] = useState("");


  const { isOpen, onClose, onOpen } = useDisclosure();

  //ketika klik edit
  const edit = id => {
    // alert(id);
    axios 
      .get("http://localhost:5000/kegiatans/"+id)
      .then(function(res){
        setKegiatanEdit(res.data);
        setJudulKegiatan(res.data.judul_kegiatan);
        setNamaProyek(res.data.nama_proyek);
        setWaktuMulai(res.data.waktu_mulai);
        setWaktuBerakhir(res.data.waktu_berakhir);
        setTanggalMulai(res.data.tanggal_mulai);
        setTanggalBerakhir(res.data.tanggal_berakhir);

        // console.log(new Date("2020-10-10T" + res.data.waktu_berakhir));
        // console.log(new Date("2020-10-10T" + res.data.waktu_berakhir).getTime() - new Date("2020-10-10T" + res.data.waktu_berakhir).getTime());
      })
      .catch(function(err){
        console.log(err);
      })
    onOpen();
  }

  //ketika edit disimpan
  const update = async(id) =>{
    
    // alert("update berhasil");
    console.log(id);
    
    try{
      await axios.patch(`http://localhost:5000/kegiatans/${id}`,{
        judul_kegiatan,
        nama_proyek,
        tanggal_mulai,
        tanggal_berakhir,
        waktu_mulai,
        waktu_berakhir,
      }
        
      )
      .then(function (res){
        console.log(res);
        // alert("update berhasil");
        onClose();
        alert("Kegiatan berhasil diubah");
        // navigate("/");
        window.location.reload();
      })
      
    }
    catch (error){
      console.log(error);

    }
  }

  const filter = () => {
    alert("ini button filter");
  };

  const delKegiatan = async(id) => {
    console.log(id);
    
    try{
      await axios.delete(`http://localhost:5000/kegiatans/${id}`)
      .then(function (res){
        console.log(res);
        onClose();
        alert("Kegiatan berhasil dihapus");
        window.location.reload();
      })
      
    }
    catch (error){
      console.log(error);

    }
  }

  const add = async() =>{
    // alert("update berhasil");    console.log(id);
    
    try{
      await axios.post(`http://localhost:5000/kegiatans/`,{
        judul_kegiatan,
        nama_proyek,
        tanggal_mulai,
        tanggal_berakhir,
        waktu_mulai,
        waktu_berakhir,
      }
        
      )
      .then(function (res){
        console.log(res);
        // alert("update berhasil");
        onClose();
        alert("Kegiatan berhasil ditambahkan");
        // navigate("/");
        window.location.reload();
      })
    }
    catch (error){
      console.log(error);
    }
  }

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

  useEffect(()=>{
    axios
      .get(" http://localhost:5000/projects")
      .then(function(res){
        let proyeks = []
        for(let i=0; i<res.data.length;i++){
          proyeks.push(res.data[i]);
        }
        setProyek(proyeks);
        // console.log(proyek);
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
          <div className='timeSheet-two-secOne'>
            <p className='text-two'>Daftar Kegiatan</p>
            <button className="btn-add-kegiatan" onClick={onOpen}><IoMdAddCircleOutline/>Tambah Kegiatan</button>             
              <TheModal isOpen={isOpen} onClose ={onClose} children={
                kegiatanEdit.length === 0 ?
                <>
                  <ModalHeader className='text-two'>Tambah Kegiatan Baru</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="form-section-one">
                      <FormControl mb={4}>
                        <FormLabel>Tanggal Mulai</FormLabel>
                        <Input type='date' onChange={(e)=>setTanggalMulai(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Tanggal Berakhir</FormLabel>
                        <Input type='date' onChange={(e)=>setTanggalBerakhir(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Waktu Mulai</FormLabel>
                        <Input type='time' onChange={(e)=>setWaktuMulai(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Waktu Berakhir</FormLabel>
                        <Input type='time' onChange={(e)=>setWaktuBerakhir(e.target.value)}/>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl  mb={4}>
                        <FormLabel>Judul Kegiatan</FormLabel>
                        <Input type='text' onChange={(e)=>setJudulKegiatan(e.target.value)}/>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <FormLabel>Nama Proyek</FormLabel>
                        <Select placeholder='Nama Proyek' onChange={(e)=>setNamaProyek(e.target.value)}>
                          {proyek.map(proyek =>
                            <option value={proyek.name_project}>{proyek.name_project}</option>
                          )}
                        </Select>
                      </FormControl>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='red' mr={3} variant='ghost' onClick={onClose}>
                      Kembali
                    </Button>
                    <Button colorScheme='red'  onClick={()=>add()} >Simpan</Button>
                  </ModalFooter>
                </>:
                <>
                  <ModalHeader className='text-two'>Ubah Kegiatan</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="form-section-one">
                      <FormControl mb={4}>
                        <FormLabel>Tanggal Mulai</FormLabel>
                        <Input type='date' value={new Date(tanggal_mulai).toISOString().slice(0, 10)} onChange={(e)=>setTanggalMulai(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Tanggal Berakhir</FormLabel>
                        <Input type='date' value={new Date(tanggal_berakhir).toISOString().slice(0, 10)} onChange={(e)=>setTanggalBerakhir(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Waktu Mulai</FormLabel>
                        <Input type='time' value={waktu_mulai} onChange={(e)=>setWaktuMulai(e.target.value)}/>
                      </FormControl>
                      <FormControl  mb={4}>
                        <FormLabel>Waktu Berakhir</FormLabel>
                        <Input type='time'value={waktu_berakhir} onChange={(e)=>setWaktuBerakhir(e.target.value)}/>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl  mb={4}>
                        <FormLabel>Judul Kegiatan</FormLabel>
                        <Input type='text' value={judul_kegiatan} onChange={(e)=>setJudulKegiatan(e.target.value)}/>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <FormLabel>Nama Proyek</FormLabel>
                        <Select placeholder='Nama Proyek' onChange={(e)=>setNamaProyek(e.target.value)}>
                          {proyek.map((proyek) => {
                              if(proyek.name_project === kegiatanEdit.nama_proyek){
                              return <option selected value={nama_proyek}>{kegiatanEdit.nama_proyek}</option>
                            }
                            else{
                              return <option value={proyek.name_project}>{proyek.name_project}</option>
                            }
                          }
                          )}
                        </Select>
                      </FormControl>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme='red' mr={3} variant='ghost' onClick={onClose}>
                      Kembali
                    </Button>
                    <Button colorScheme='red' onClick={()=>update(kegiatanEdit.id)}>Simpan</Button>
                  </ModalFooter>
                </> 
              }>
              </TheModal>
              
          </div>
          <div className='timeSheet-two-secOne'>
            <Input type='text' />
            <button className='btn-filter' onClick={()=>filter()}><IoFilter/></button>
          </div>
        </div>
        <div>
          <TableContainer className=''>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th >Judul Kegiatan</Th>
                  <Th className='text-three'>Proyek</Th>
                  <Th className='text-three'>Tanggal Mulai</Th>
                  <Th className='text-three'>Tanggal Berakhir</Th>
                  <Th className='text-three'>Waktu Mulai</Th>
                  <Th className='text-three'>Waktu Berakhir</Th>
                  <Th className='text-three'>Durasi</Th>
                  <Th className='text-three'>Aksi</Th>
                </Tr>
              </Thead>
              <Tbody>
                {kegiatan.map(item =>
                  <Tr>
                    <Td>{item.judul_kegiatan}</Td>
                    <Td className='text-three' >{item.nama_proyek}</Td>
                    <Td className='text-three'>{new Date(item.tanggal_mulai).toLocaleDateString()}</Td>
                    <Td className='text-three'>{new Date(item.tanggal_berakhir).toLocaleDateString()}</Td>
                    <Td className='text-three'>{format(item.waktu_mulai)}</Td>
                    <Td className='text-three'>{format(item.waktu_berakhir)}</Td>
                    <Td className='text-three'>0</Td>
                    <Td className="btn-action text-three">
                      <button className='btn-filter' onClick={()=> edit(item.id)}>
                        <RiEdit2Fill/>
                      </button>
                      <button className='btn-filter'  onClick={()=> delKegiatan(item.id)}>
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