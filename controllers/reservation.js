import Reservation from '../models/Reservation.js';

// Create a new reservation
export const createReservation = async (req, res) => {
  try {
    // Extract the reservation data from the request body
    const {numR, userId, roomId, cardNumber, cardHolderName, expiryDate, cvv ,statut,startDate,endDate} = req.body;

    // Create a new reservation document
    const reservation = new Reservation({
      numR,
      userId,
      roomId,
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
      statut,
      startDate,
      endDate,
    });

    // Save the reservation to the database
    const savedReservation = await reservation.save();

    // Return a success response
    res.status(201).json({ reservationId: reservation._id });
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred while saving the reservation.' });
  }
};

// Get all reservations
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().exec();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reservations.' });
  }
};
export const getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.reservationId);
    res.json(reservation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération de la réservation." });
  }
};