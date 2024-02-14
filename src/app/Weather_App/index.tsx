'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import daySvg from '../../../public/day.svg';

const Weather_App = () => {
  const [userLatitude, setUserLatitude] = useState<number>();
  const [userLongitude, setUserLongitude] = useState<number>();
  const [weatherCode, setWeatherCode] = useState();

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
