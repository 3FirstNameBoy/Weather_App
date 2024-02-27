'use client';
import React, { useState, useEffect, useRef } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';

import { Row, Col, Navbar, Form, Button, Spinner } from 'react-bootstrap';

interface Hourly {
  temperature_2m: number[];
  time: string[];
  weather_code: number[];
}

interface Weather {
  elevation: number;
  latitude: number;
  longitude: number;
  hourly: Hourly;
}

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);

  const [weather, setWeather] = useState<Weather | undefined>();
  console.log('outside user Lat: ', userLatitude, 'user Long: ', userLongitude);

  useEffect(() => {
    const getPosition = async () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLatitude(position.coords.latitude);
          setUserLongitude(position.coords.longitude);
        },
        error => {
          console.log(error);
        }
      );
    };
    getPosition();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      if (userLatitude === 0 || userLongitude === 0) {
        console.error('Position is missing');
        return;
      }

      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${userLatitude}&longitude=${userLongitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setWeather(data);
        });
    };

    getWeather();
  }, [userLatitude, userLongitude]);

  console.log('weather', weather);

  if (!weather) {
    return <Spinner />;
  }

  return <WeatherCard weather={weather} />;
};

export default Weather_App;
/////
