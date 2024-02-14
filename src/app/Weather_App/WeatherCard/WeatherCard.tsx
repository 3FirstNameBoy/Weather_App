import React from 'react';
import styles from './WeatherCard.module.scss';
import Image from 'next/image';
import daySvg from '../../../../public/day.svg';

const WeatherCard = () => {
  const SunSvg = () => {
    return (
      <Image
        src={daySvg}
        alt="My SVG"
        width={200}
        height={200}
      />
    );
  };

  return (
    <div className={styles.currentWeatherDiv}>
      <SunSvg />
      <h1>Current Location</h1>
      <p>day of the week</p>
      <p>date</p>
      <p>temperature</p>
      <p>weather type</p>
    </div>
  );
};

export default WeatherCard;
