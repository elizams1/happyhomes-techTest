import Kegiatan from "../models/KegiatanModel.js";

export const getKegiatans = async(req,res)=>{
  try{
    const response = await Kegiatan.findAll();
    res.status(200).json(response);
  } 
  catch (error){
    console.log(error.message);
  }
}

export const getKegiatansById = async(req,res)=>{
  try{
    const response = await Kegiatan.findOne({
        where:{
          id: req.params.id
        }
    });
    res.status(200).json(response);
  } 
  catch (error){
    console.log(error.message);
  }
}

export const createKegiatan = async(req,res)=>{
  try{
    await Kegiatan.create(req.body);
    res.status(201).json({msg:"Kegiatan Created"});
  } 
  catch (error){
    console.log(error.message);
  }
}

export const updateKegiatan = async(req,res)=>{
  try{
    await Kegiatan.update(req.body,{
      where:{
        id:req.params.id
      }
    });
    res.status(200).json({msg:"Kegiatan Updated"});
  } 
  catch (error){
    console.log(error.message);
  }
}

export const deleteKegiatan = async(req,res)=>{
  try{
    await Kegiatan.destroy({
      where:{
        id:req.params.id
      }
    });
    res.status(200).json({msg:"Kegiatan Deleted"});
  } 
  catch (error){
    console.log(error.message);
  }
}