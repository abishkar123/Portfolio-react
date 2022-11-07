import React from 'react'
import my from "../asests/my.png";
import { Row, Container,Col } from 'react-bootstrap';
import { Layout } from './Layout';

export const AboutMe = () => {
  return (
    <Layout>
    <div>
  <div className="title mt-3">
    <span>About Me</span>
  </div>

  <Container>
  <Row>
    <Col mb="3" className="mb-9">
      <img src={my}  width="40%" />
    </Col>

    <Col md="7">
      <p className='p2 py-5'>I recently finished my BIT Program and i am currenly doing job ready program at dented code
       and i am have solving solving nature.i have been doing Programming from last 4 years and i have knowledge about 
       HTML5, CSS3, JavaScript, PHP, MySql, React.js and more.
      <hr/>
      My habit are watching movies, reading book and playing football.....
      </p>
    </Col>
  </Row>
  </Container>


    </div>
    </Layout>
  );
};
 