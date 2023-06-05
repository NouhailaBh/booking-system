import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./Reservation.css"

const ReservationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('room');
  const start = searchParams.get('start');
  const end = searchParams.get('end');
  const [lastReservationNumber, setLastReservationNumber] = useState(0);

  useEffect(() => {
    const userIdFromSession = sessionStorage.getItem('userId');
    if (userIdFromSession) {
      setUserId(userIdFromSession);
      console.log(userId)
    }
  }, []);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/reservations');
        const reservations = response.data;

        // Trouver le dernier numéro de réservation en parcourant les réservations
        const lastReservation = reservations.reduce((maxReservation, reservation) => {
          if (reservation.numR > maxReservation.numR) {
            return reservation;
          }
          return maxReservation;
        }, { numR: 0 });

        const lastReservationNumber = lastReservation.numR;

        // Mettre à jour l'état avec le nouveau numéro de réservation
        setLastReservationNumber(lastReservationNumber);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReservations();
  }, []);

  const handleOnlinePayment = () => {
    setShowPaymentInfo(true);
  };

  const handleOnArrivalPayment = async () => {
    try {
      const statut = 'non payé';
      const newReservationNumber = lastReservationNumber + 1;

      const response = await axios.post('http://localhost:4001/api/reservations', {
        userId,
        roomId,
        statut,
        startDate: start,
        endDate: end,
        numR: newReservationNumber,
      });

      const reservationId = response.data.reservationId;
      const roomResponse = await axios.get(`http://localhost:4001/api/rooms/${roomId}`);
      const room = roomResponse.data;

      // Mettre à jour les tableaux startDate et endDate avec la nouvelle date
      const updatedStartDate = [...room.startDate, new Date(start)];
      const updatedEndDate = [...room.endDate, new Date(end)];

      await axios.put(`http://localhost:4001/api/rooms/${roomId}`, {
        startDate: updatedStartDate,
        endDate: updatedEndDate,
      });

      // Redirect to the facture page
      navigate(`/facture?room=${roomId}&reservation=${reservationId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!userId && (
        <p>
          Veuillez vous connecter pour effectuer une réservation.{' '}
          <a href="/login">Se connecter</a>
        </p>
      )}

      {userId && !showPaymentInfo && (
        <div className="row">
          <div className="m-auto">
            <h3>Choisissez votre mode de paiement :</h3>
            <button onClick={handleOnlinePayment} className="btn btn-primary">
              Payer en ligne
            </button>
            <button onClick={handleOnArrivalPayment} className="btn btn-secondary">
              Payer à l'arrivée
            </button>
          </div>
        </div>
      )}

      {showPaymentInfo && (
        <PaymentInformation
          userId={userId}
          roomId={roomId}
          navigate={navigate}
          start={start}
          end={end}
          lastReservationNumber={lastReservationNumber}
        />
      )}
    </div>
  );
};

const PaymentInformation = ({ userId, roomId, navigate, start, end, lastReservationNumber }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cardNumber === '' || cardHolderName === '' || expiryDate === '' || cvv === '') {
      alert('Please fill in all the required fields.');
      return;
    }

    try {
      const newReservationNumber = lastReservationNumber + 1;
      const statut = 'payé';

      const response = await axios.post('http://localhost:4001/api/reservations', {
        numR: newReservationNumber,
        userId,
        roomId,
        cardNumber,
        cardHolderName,
        expiryDate,
        cvv,
        statut,
        startDate: start,
        endDate: end,
      });

      const roomResponse = await axios.get(`http://localhost:4001/api/rooms/${roomId}`);
      const room = roomResponse.data;

      // Mettre à jour les tableaux startDate et endDate avec la nouvelle date
      const updatedStartDate = [...room.startDate, new Date(start)];
      const updatedEndDate = [...room.endDate, new Date(end)];

      await axios.put(`http://localhost:4001/api/rooms/${roomId}`, {
        startDate: updatedStartDate,
        endDate: updatedEndDate,
      });

      setCardNumber('');
      setCardHolderName('');
      setExpiryDate('');
      setCvv('');

      const reservationId = response.data.reservationId;

      navigate(`/facture?room=${roomId}&reservation=${reservationId}`);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Credit Card Payment Form Template | PrepBootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css" />
    
        <script type="text/javascript" src="js3/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    </head>
    <body>
    
    <div class="container">
    
    <div class="page-header">
      <div className='container'>
      <div className='container'>
    <h2>Credit Card Payment Form Template</h2>
     </div>
  
     </div>
    </div>
    
  
    <form onSubmit={handleSubmit}>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-5 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <div class="row">
                            <h3 class="text-center">Payment Details</h3>
                            <img class="img-responsive cc-img" src="https://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"/>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>CARD NUMBER</label>
                                        <div class="input-group">
                                            <input type="tel" id="cardNumber" class="form-control" placeholder="Valid Card Number"value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                                            <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                               
                            </div>
                            <div class="row">
                                <div class="col-xs-7 col-md-7">
                                    <div class="form-group">
                                        <label><span class="hidden-xs">EXPIRATION</span><span class="visible-xs-inline">EXP</span> DATE</label>
                                        <input type="tel"   id="expiryDate" class="form-control" placeholder="MM / YY"value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required />
                                    </div>
                                </div>
                                <div class="col-xs-5 col-md-5 pull-right">
                                    <div class="form-group">
                                        <label>CV CODE</label>
                                        <input type="number" class="form-control" placeholder="CVC" id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label>Titulaire de la carte </label>
                                        <input type="text" class="form-control" placeholder="Card Owner Names"    id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-xs-12">
                                <button class="btn btn-primary btn-lg btn-block" type='submit'>Process payment</button>

                            </div>
                            <i class="bi bi-paypal"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
     </form>
    
    </div>
   
    </body>
    </html>
  );
  
};


export default ReservationPage;
