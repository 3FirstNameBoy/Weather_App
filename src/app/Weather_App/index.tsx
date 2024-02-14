'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import daySvg from '../../../public/day.svg';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>(0);
  const [userLongitude, setUserLongitude] = useState<number>(0);
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getLocation = navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      console.log('Latitude is :', position.coords.latitude);

      const long = position.coords.longitude;
      console.log('Longitude is :', position.coords.longitude);

      setUserLatitude(lat);
      console.log('userLat is :', userLatitude);
      setUserLongitude(long);
      console.log('userLong is :', userLongitude);
    });
  });

  useEffect(() => {
    const getWeather = async () => {
      const query = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=35.9606&longitude=-83.9207&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch'
      );
      const response = await query.json();
      console.log('response: ', response);
      setWeather(response);
    };
    getWeather();
  }, []);

  const SunSvg = () => {
    return (
      <div>
        <Image
          src={daySvg}
          alt="My SVG"
          width={200}
          height={200}
        />
      </div>
    );
  };

  return (
    <div>
      <p>Weather_App</p>
      <SunSvg />
    </div>
  );
};

export default Weather_App;
