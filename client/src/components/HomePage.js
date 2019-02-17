import React, { Component } from 'react';
import CourseDeck from './CourseDeck'
import { Row, Container, Col } from 'reactstrap'
import '../assets/css/Home.css';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-3 py-4">Mini-Collel</h1>
            <hr className="w-25 pb-4" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h4 className="display-4 pb-4">Les derniers cours</h4>
          </Col>
        </Row>
        <Row>
          <CourseDeck />
        </Row>
      </Container>
    );
  }
}

export default Home;
