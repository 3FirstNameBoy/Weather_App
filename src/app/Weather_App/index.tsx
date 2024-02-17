'use client';
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';

import { Row, Col, Navbar, Form, Button } from 'react-bootstrap';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLatitude(position.coords.latitude);
          console.log(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
          console.log('user Lat: ', userLatitude, 'user Long: ', userLongitude);
        },
        error => {
          console.log(error);
        }
      );
    };

    const getWeather = async () => {
      await getLocation();
      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${userLatitude}&longitude=${userLongitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
      )
        .then(res => res.json)
        .then(data => setWeather(data));
    };

    getWeather();
  }, []);

  return <WeatherCard weather={weather} />;
};

export default Weather_App;
