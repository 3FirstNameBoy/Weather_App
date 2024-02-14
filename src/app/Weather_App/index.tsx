'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import daySvg from '../../../public/day.svg';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState([]);
  const [userLongitude, setUserLongitude] = useState([]);
  const [weatherCode, setWeatherCode] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  });

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
