import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes} = Sequelize;

const Project = db.define(
    'projects',{
        name_project:DataTypes.STRING
    },{
        freezeTableName:true
    });

export default Project;

(async()=>{
    await db.sync();
})();
