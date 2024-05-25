import express from 'express';
import {sendResevation} from '../controllers/reservation.js'
const router =express.Router();
router.post('/send',sendResevation);
export default router;