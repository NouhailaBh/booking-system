import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('room');
  const start = searchParams.get('start'); 
   const end = searchParams.get('end');
  useEffect(() => {
    const userIdFromSession = sessionStorage.getItem('userId');
    if (userIdFromSession) {
      setUserId(userIdFromSession);
      console.log(userId)
    }
  }, []);

 /* const handleReservation = () => {
    if (userId === '') {
      navigate('/login');
    } else {
      // Handle the reservation logic here
      // You can display payment options or proceed with the reservation directly
    }
  };
*/
  const handleOnlinePayment = () => {
    setShowPaymentInfo(true);
  };

  const handleOnArrivalPayment = async () => {
    // Handle on-arrival payment logic here
    try {
      const statut = 'non payé';
      const response = await axios.post('http://localhost:4001/api/reservations', {
        userId,
        roomId,
        statut,
      });
      const reservationId = response.data.reservationId;
      await axios.put(`http://localhost:4001/api/rooms/${roomId}`, {
        startDate: start,
        endDate: end,
      });
      // Redirect to the facture page
      navigate(`/facture?room=${roomId}&reservation=${reservationId}`);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1>Page de réservation</h1>

      {!userId && (
        <p>
          Veuillez vous connecter pour effectuer une réservation.{' '}
          <a href="/login">Se connecter</a>
        </p>
      )}

      {userId && !showPaymentInfo && (
        <div>
          <p>Choisissez votre mode de paiement :</p>
          <button onClick={handleOnlinePayment}>Payer en ligne</button>
          <button onClick={handleOnArrivalPayment}>Payer à l'arrivée</button>
        </div>
      )}

      {showPaymentInfo && (
        <PaymentInformation userId={userId} roomId={roomId} navigate={navigate} />
      )}

     
    </div>
  );
};

const PaymentInformation = ({ userId, roomId, navigate }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const start = searchParams.get('start'); 
   const end = searchParams.get('end');
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation on the form fields
    if (cardNumber === '' || cardHolderName === '' || expiryDate === '' || cvv === '') {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const statut = 'payé';
      const response = await axios.post('http://localhost:4001/api/reservations', {
        userId,
        roomId,
        cardNumber,
        cardHolderName,
        expiryDate,
        cvv,
        statut,
      });
      await axios.put(`http://localhost:4001/api/rooms/${roomId}`, {
        startDate: start,
        endDate: end,
      });
      // Handle the response or perform additional actions

      // Clear the form fields
      setCardNumber('');
      setCardHolderName('');
      setExpiryDate('');
      setCvv('');
      const reservationId = response.data.reservationId;
      // Redirect to the other page after successful payment
      console.log(reservationId);
      
      navigate(`/facture?room=${roomId}&reservation=${reservationId}`); // Replace '/other-page' with the actual path of the page
    } catch (error) {
      // Handle the error or display an error message
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Informations bancaires</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Numéro de carte :</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardHolderName">Titulaire de la carte :</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Date d'expiration :</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV :</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
  
};


export default ReservationPage;
