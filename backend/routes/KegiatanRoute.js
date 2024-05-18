import express from "express";
import {
  getKegiatans, 
  getKegiatansById, 
  createKegiatan,
  updateKegiatan,
  deleteKegiatan
} from "../controllers/KegiatanController.js";

const router = express.Router();

router.get('/kegiatans',getKegiatans);
router.get('/kegiatans/:id',getKegiatansById);
router.post('/kegiatans',createKegiatan);
router.patch('/kegiatans/:id',updateKegiatan);
router.delete('/kegiatans/:id',deleteKegiatan);

export default router;