import React from 'react';
import styles from './WeatherCard.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RainyOneSvg } from '../WeatherSvgs/WeatherSvgs';

const WeatherCard = () => {

  return (
    <Container>
      <Row>
        <div className={styles.currentWeatherDiv}>
          <RainyOneSvg />
          <h1>Current Location</h1>
          <p>day of the week</p>
          <p>date</p>
          <p>temperature</p>
          <p>weather type</p>
        </div>
      </Row>
    </Container>
  );
};

export default WeatherCard;
