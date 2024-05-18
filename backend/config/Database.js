import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db_hh','root','',{
  host:'localhost',
  port:"3300",
  dialect:'mysql'
});

export default db;