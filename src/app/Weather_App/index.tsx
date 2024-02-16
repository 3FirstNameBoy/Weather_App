'use client';
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);
  const [weather, setWeather] = useState();

  useEffect(() => {
    let lat: number = 0;
    let long: number = 0;
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;

        long = position.coords.longitude;
      });
    };
    getLocation();

    const getWeather = async (lat: number, long: number) => {
      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
      );
      const response = await query.json();

      setWeather(response);
    };

    getWeather(lat, long);
  }, []);

  console.log(weather);

  return (
    <div>
      <WeatherCard />
    </div>
  );
};

export default Weather_App;
