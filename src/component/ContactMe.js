import React from 'react'
import { Row, Container,Col } from 'react-bootstrap';
import { Layout } from './Layout';

export const ContactMe = () => {
  return (
<Layout>
<Container id='contact'>
  <div class="title">
    <span>Contact Me</span>
  </div>
  
  <Row className="fa-2x py-5 text-center">
  <p><i className="fa-solid fa-mobile text-body"></i>0416881277</p>
  <p><i class="fa-solid fa-envelope text-info"></i>raiabishkar0.5@gmail.com </p>

    <Col className="d-flex justify-content-around pb-2 contact rounded-9 py-6">
      <a href="https://www.facebook.com/IMAbishkarRai"> <i className="fa-brands fa-facebook text-Primar"></i></a>
      <a href="https://www.linkedin.com/in/abishkar-rai/"> <i className="fa-brands fa-linkedin text-primary"></i></a>
      <a href="https://www.instagram.com/iamabishkarrai/"><i className="fa-brands fa-square-instagram text-danger"></i></a>
    </Col>

    </Row>
    
</Container>
</Layout>

  );
};
