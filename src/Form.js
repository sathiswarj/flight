import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './Form.css'; 
import { FaPlane } from "react-icons/fa";

const Form = () => {
  const [flights, setFlights] = useState([]);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');

  const jsonData = {
    "flights": [
     {
        "origin": "JFK",
        "destination": "LHR",
        "departureTime": "2024-07-10T08:00:00",
        "arrivalTime": "2024-07-10T11:30:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 250.00,
        "cabin": "Economy"
      },
       {
        "origin": "JFK",
        "destination": "DEL",
        "departureTime": "2024-07-10T08:00:00",
        "arrivalTime": "2024-07-10T11:30:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 250.00,
        "cabin": "Business"
      },
       {
        "origin": "JFK",
        "destination": "SYD",
        "departureTime": "2024-07-10T08:00:00",
        "arrivalTime": "2024-07-10T11:30:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 250.00,
        "cabin": "Economy"
      },
      {
        "origin": "DEL",
        "destination": "SYD",
        "departureTime": "2024-07-10T14:30:00",
        "arrivalTime": "2024-07-10T17:00:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 150.50,
        "cabin": "Business"
      },
      {
        "origin": "DEL",
        "destination": "DOH",
        "departureTime": "2024-07-10T14:30:00",
        "arrivalTime": "2024-07-10T17:00:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 150.50,
        "cabin": "Business"
      },
      {
        "origin": "SYD",
        "destination": "SIN",
        "departureTime": "2024-07-10T20:15:00",
        "arrivalTime": "2024-07-11T05:45:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1800.75,
        "cabin": "First Class"
      },
      {
        "origin": "SYD",
        "destination": "JFK",
        "departureTime": "2024-07-10T20:15:00",
        "arrivalTime": "2024-07-11T05:45:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1800.75,
        "cabin": "First Class"
      },
       {
        "origin": "SYD",
        "destination": "DEL",
        "departureTime": "2024-07-10T20:15:00",
        "arrivalTime": "2024-07-11T05:45:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1800.75,
        "cabin": "First Class"
      },
      {
        "origin": "BOM",
        "destination": "SIN",
        "departureTime": "2024-07-10T08:00:00",
        "arrivalTime": "2024-07-10T11:30:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 2250.00,
        "cabin": "Economy"
      },
      {
        "origin": "BNE",
        "destination": "JFK",
        "departureTime": "2024-07-10T14:30:00",
        "arrivalTime": "2024-07-10T17:00:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1050.50,
        "cabin": "Business"
      },
        {
        "origin": "BNE",
        "destination": "DEL",
        "departureTime": "2024-07-10T14:30:00",
        "arrivalTime": "2024-07-10T17:00:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1050.50,
        "cabin": "Business"
      },{
        "origin": "BNE",
        "destination": "SYD",
        "departureTime": "2024-07-10T14:30:00",
        "arrivalTime": "2024-07-10T17:00:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 1050.50,
        "cabin": "Business"
      },
      {
        "origin": "BLR",
        "destination": "DEL",
        "departureTime": "2024-07-10T20:15:00",
        "arrivalTime": "2024-07-11T05:45:00",
        'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
        "cost": 3800.75,
        "cabin": "First Class"
      }
    ]
  };


  const onSubmit = (event) => {
    event.preventDefault();

    const filteredFlights = jsonData.flights.filter(flight => (
      (option1 === '' || flight.origin === option1 || flight.destination === option1) &&
      (option2 === '' || flight.origin === option2 || flight.destination === option2) &&
      (option3 === '' || flight.cabin === option3)
    ));
       localStorage.setItem('results', JSON.stringify(filteredFlights))
    setFlights(filteredFlights);
  };

  useEffect(() => {
    const allResults = JSON.parse(localStorage.getItem('results'))
  if(allResults){
     setFlights(allResults);
  }
  },[]);

  return (
    <div className="container mt-4">
      <h2>Choose origin and destination airports</h2>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-xs-12">
            <select className="form-select" value={option1} onChange={(e) => setOption1(e.target.value)} required>
              <option value="">Origin</option>
              <option value="JFK">JFK</option>
              <option value="DEL">DEL</option>
              <option value="SYD">SYD</option>
              <option value="BOM">BOM</option>
              <option value="BNE">BNE</option>
              <option value="BLR">BLR</option>
            </select>
          </div>
          <div className="col-xs-12">
            <select className="form-select" value={option2} onChange={(e) => setOption2(e.target.value)} required>
              <option value="">Destination</option>
              <option value="JFK">JFK</option>
              <option value="DEL">DEL</option>
              <option value="SYD">SYD</option>
              <option value="LHR">LHR</option>
              <option value="CDG">CDG</option>
              <option value="DOH">DOH</option>
              <option value="SIN">SIN</option>
            </select>
          </div>
          <div className="col-xs-12">
            <select className="form-select" value={option3} onChange={(e) => setOption3(e.target.value)} required>
              <option value="">Cabin</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-xs-12">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>

      <hr />
 
      <div className="row justify-content-center">
        <div className="col-md-">
          {flights.length > 0 ? (
            <div className="row">
              {flights.map((flight, index) => (
                <div key={index} className="col-md-12 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                    <p className="card-detail">{flight.partnerPrograms[0]}</p>
                      <h3 className="card-title">{flight.origin} <FaPlane className="icon" style={{fontSize:'smaller'}}/> {flight.destination}</h3>
                      <div className="card-text">
                        <p className="card-detail"> Arrival :  {format(new Date(flight.arrivalTime), "MMMM dd, yyyy p")}</p>
                        <p className="card-detail">Departure : {format(new Date(flight.departureTime), "MMMM dd, yyyy p")}</p>
                        <h3>  ${flight.cost.toFixed(2)}</h3>
                        <p className="card-detail">{flight.cabin} </p>
                        <p className="card-detail">{format(new Date(), "MMMM dd, yyyy p")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h4 className="text-center">Try another search route</h4>
          )}
        </div>
      </div>
      </div>
  );
};

export default Form;
