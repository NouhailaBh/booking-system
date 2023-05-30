import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  roomId: { type: String, required: true },
  cardNumber: { type: String, required: false },
  cardHolderName: { type: String, required: false },
  expiryDate: { type: String, required: false },
  cvv: { type: String, required: false },
  statut: { type: String, required: true }, // Mettre le champ statut comme requis
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
