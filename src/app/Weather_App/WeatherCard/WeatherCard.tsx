import React from 'react';
import styles from './WeatherCard.module.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RainyOneSvg } from '../WeatherSvgs/WeatherSvgs';

const WeatherCard = (weather: object) => {
  return (
    <Container className={styles.weatherContainer}>
      <Col className={styles.weatherCardDiv}>
        <Row>
          <RainyOneSvg />
        </Row>
        <Row>
          <h1>Current Location</h1>
          <p>day of the week</p>
          <p>date</p>
          <p>temperature</p>
          <p>weather type</p>
        </Row>
      </Col>
    </Container>
  );
};

export default WeatherCard;
