import React from 'react'
import { Row, Container,Col } from 'react-bootstrap';
import project1 from "../asests/project1.JPG";
import project2 from "../asests/project2.JPG";

export const Experience = () => {
  return (
    <div className="Experience">
    <div className="title mt-3">
      <span>Experiences</span>
    </div>
  
  <Container>
    <Row class="mb-5">
      <Col md="6" class ="mb-3">
        <img src={project1} width="100%"/>
      </Col>
      <Col>
      <div>
        <h3>Project 1</h3>
        <div>
        <a href="#!" target="_blank">
          <i className="fa-brands fa-github text-primary"></i>
          </a></div>
          <p className="mt-2">Tech used: HTML5, CSS3</p>
        <p className="p2"> This is one of the project which i worked on university. This project 
          based on the front-end page where i used HTML, CSS, JQuery and JavaSript.
        </p>
  
      </div>
      </Col>
    </Row>
  
  
    <Row className="mb-5">
      <div className="col-md order-md-3">
        <img src={project2} width="100%"/>
      </div>

      <Col md="6">
      <div>
        <h3>Project 2</h3>
        <div>
        <a href="#!" target="_blank">
          <i className="fa-brands fa-github text-primary"></i></a>
          </div>
          <p className="mt-2">Tech used: HTML5, CSS3, MySql and Xammp Server</p>
        <p className="p2"> This Project name was Online Refercing check which was main project on my Univerisy BIT
          program where i worked on both side frontend and backend where i used HTML,CSS,JavaSript, Query,
          PHP and MySql and more.
        </p>
  
      </div>
      </Col>
    </Row>
   
  </Container>
  </div>
  );
};
