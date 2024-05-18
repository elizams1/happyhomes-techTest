import Project from "../models/ProjectModel.js";

export const getProjects = async(re,res)=>{
  try{
    const response = await Project.findAll();
    res.status(200).json(response);
  }
  catch(error){
    console.log(error.message);
  }
}

export const createProject = async(req,res)=>{
  try{
    await Project.create(req.body);
    res.status(201).json({msg:"Project Created"});
  } 
  catch (error){
    console.log(error.message);
  }
}