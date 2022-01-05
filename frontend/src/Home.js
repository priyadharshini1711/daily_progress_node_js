import React, { Component } from "react";
import "./App";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import axios from "axios";

class Home extends Component {
  //state components foe the report
  state = {
    emotion: "",
    learning: "",
    planForTheDay: "",
    challenge: "",
    plannedAccomplishments: "",
    unplannedAccomplishments: "",
    appreciationAndThanks: "",
    planForNextDay: "",
  };

  //records change of value
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  //forming the table
  createReport = () => {
    axios
      .post("http://localhost:8000/create-pdf", this.state)
      .then(console.log("Report Sent Successfully"));
  };

  viewReport = () => {};

  render() {
    const {
      emotion,
      learning,
      challenge,
      planForTheDay,
      planForNextDay,
      plannedAccomplishments,
      unplannedAccomplishments,
      appreciationAndThanks,
    } = this.props;
    return (
      <div>
        <div class="mt-4 ml-5 page-header">
          <h2>Daily Progress</h2>
        </div>
        <Container fluid="md">
          <div className="container">
            <Row>
              <Form className="px-5">
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Emotion of the Day</Form.Label>
                    <Col>
                      <Form.Control
                        className="mw-100"
                        size="lg"
                        type="text"
                        placeholder=""
                        name="emotion"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Learning</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="learning"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Plan for the Day</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="planForTheDay"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Challenge of the Day</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="challenge"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Planned Accomplishments</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="plannedAccomplishments"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">
                      UnPlanned Accomplishments
                    </Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="unplannedAccomplishments"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Plan For Next Day</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="planForNextDay"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Row>
                    <Form.Label column="lg">Appreciation and Thanks</Form.Label>
                    <Col>
                      <Form.Control
                        size="lg"
                        as="textarea"
                        rows="2"
                        placeholder=""
                        name="appreciationAndThanks"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Row>
                </Form.Group>
                <br />
                <div className="d-flex flex-row mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={this.createReport}>
                    Send
                  </Button>
                  <div className="ml-5">
                    <Link to="/generate-pdf" state={{ form_data: this.state }}>
                      <Button variant="primary" size="lg">
                        Preview
                      </Button>
                    </Link>
                  </div>{" "}
                </div>
              </Form>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
