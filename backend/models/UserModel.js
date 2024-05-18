import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define(
    'users',{
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name:DataTypes.STRING,
        rate:DataTypes.INTEGER,
        total_durasi: DataTypes.INTEGER,
        total_durasi_overtime: DataTypes.INTEGER,
        total_pendapatan: DataTypes.INTEGER,
        total_pendapatan_overtime: DataTypes.INTEGER
    },{
        freezeTableName:true
    });

export default User;

(async()=>{
    await db.sync();
})();
