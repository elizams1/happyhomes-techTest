import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import './Pengaturan.css';
import { Link } from 'react-router-dom';

function Pengaturan() {
  const [karyawan, setKaryawan] = useState([]);
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

  const updateData = () =>{
    alert("simpan");
  }

  return (
    <div class="pengaturan-page">
      <div class="pengaturan-form">
        <FormControl>
          <FormLabel>Nama Karyawan</FormLabel>
          <Input type='email' value={karyawan.name}/>
        </FormControl>
        <FormControl>
          <FormLabel>Rate</FormLabel>
          <Input type='text' value={karyawan.rate}/>
        </FormControl>
      </div>
      <div className='pengaturan-button'>
        <Link to='/'>
          <button className='button-batal'>
            Batalkan
          </button>
        </Link>
        
        <button className='button-simpan' onClick={()=>updateData()}>
            Simpan
        </button>
      </div>
    </div>

  )
}

export default Pengaturan