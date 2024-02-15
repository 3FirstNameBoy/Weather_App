import React from 'react';
import styles from './WeatherCard.module.scss';
import Image from 'next/image';
import { RainyOneSvg } from '../WeatherSvgs/WeatherSvgs';

const WeatherCard = () => {
  return (
    <div className={styles.currentWeatherDiv}>
      <RainyOneSvg />
      <h1>Current Location</h1>
      <p>day of the week</p>
      <p>date</p>
      <p>temperature</p>
      <p>weather type</p>
    </div>
  );
};

export default WeatherCard;
