import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  const selected = (e) =>{
    var id = e.target.id;
    console.log("id");
    console.log(e.target.id);
    // console.log(e.target.getAttribute("id"));
    var el =  document.querySelector('.select');
    var cha = document.getElementById(id);
    el.classList.remove('select');
    cha.classList.add('select');
  }
  return (
    <div className='header'>
      <div className='header-one'>
        <p>Timesheet Management</p>
      </div>
      <div className='header-two'>
        <p className='text-one'>HH Timesheet</p>
        <div className='button-header'>
          <Link to='/'>
            <button className='button select' id='kegiatan' onClick={(e)=>selected(e)} >
              Daftar Kegiatan
            </button>
          </Link>
          <Link to='/pengaturan'>
            <button className='button' id='pengaturan' onClick={(e)=>selected(e)} >
              Pengaturan
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Header