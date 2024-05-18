import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;


const Kegiatan = db.define(
    'kegiatans',{
        judul_kegiatan:DataTypes.STRING,
        nama_proyek:DataTypes.STRING,
        tanggal_mulai:DataTypes.DATE,
        tanggal_berakhir: DataTypes.DATE,
        waktu_mulai : DataTypes.TIME,
        waktu_berakhir : DataTypes.TIME,
        durasi_jam: DataTypes.INTEGER,
        durasi_menit: DataTypes.INTEGER
    },{
        freezeTableName:true
    });

export default Kegiatan;

(async()=>{
    await db.sync();
})();