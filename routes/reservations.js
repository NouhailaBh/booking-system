import express  from "express";


import { createReservation, getAllReservations,getReservationById} from "../controllers/reservation.js";
const router = express.Router();
// Créer une nouvelle réservation
router.post("/", createReservation);

// Obtenir toutes les réservations
router.get("/", getAllReservations);
router.get('/:reservationId', getReservationById);
export default router;

