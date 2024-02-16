'use client';
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getLocation = navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;

      let long = position.coords.longitude;

      // setUserLatitude(lat);
      // setUserLongitude(long);
      return { lat, long };
    });

    const getWeather = async ({ lat, long }) => {
      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
      );
      const response = await query.json();
      console.log('response: ', response);
      setWeather(response);
    };

    getWeather();
  }, []);

  return (
    <div>
      <WeatherCard />
    </div>
  );
};

export default Weather_App;
