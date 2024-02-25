import React from 'react';
import styles from './WeatherCard.module.scss';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { RainyOneSvg } from '../WeatherSvg/WeatherSvg';

const WeatherCard = (weather: any) => {
  return (
    <Container className={styles.weatherContainer}>
      <Row>
        <Col>
          <RainyOneSvg />
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Today</Card.Title>
              <br></br>
              <Card.Text>
                <h1>Temperature</h1>
              </Card.Text>
              <Card.Text>Weather type</Card.Text>
              <Card.Text>Time</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
