import React from 'react'
import { Row, Container,Col } from 'react-bootstrap';
import { Layout } from './Layout';

export const ContactMe = () => {
  return (
<Layout>
  <div id="contact" className='contact rounted-5 py-2'>
  <div class="title">
    <span>Contact Me</span>
  </div>
  <Container>
  <Row className="fa-3x">
    <Col className="d-flex justify-content-around pb-4">
      <a href="##"><i class="fa-solid fa-mobile text-body"></i></a>
      <a href="##"><i class="fa-solid fa-envelope text-info"></i></a>
      <a href="##"> <i class="fa-brands fa-facebook text-Primar"></i></a>
      <a href="##"> <i class="fa-brands fa-linkedin text-primary"></i></a>
      <a href="##"><i class="fa-brands fa-square-instagram text-danger"></i></a>
    </Col>

    </Row>
    </Container>
</div>
</Layout>

  );
};
