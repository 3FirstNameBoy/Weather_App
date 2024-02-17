import React from 'react';
import styles from './WeatherCard.module.scss';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { RainyOneSvg } from '../WeatherSvg/WeatherSvg';

const WeatherCard = (weather: object) => {
  return (
    <Container className={styles.weatherContainer}>
      <Row>
        {/* <Row>
          <RainyOneSvg />
        </Row>
        <Row>
          <h1>Current Location</h1>
          <p>day of the week</p>
          <p>date</p>
          <p>temperature</p>
          <p>weather type</p>
        </Row> */}
        <Col>
          <RainyOneSvg />
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Today</Card.Title>
              <br></br>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
