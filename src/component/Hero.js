import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import my from "../asests/my.png";
import TopNav from './TopNav';

export const Hero = () => {
  return (
    <div ClassName="hero">
        <TopNav/>
        <Container>
        <div className="row mt-5 py-3">
       <div className="col-md-5 text-center order-md-2">
       
            <img src={my} width="40%"/>
        </div>

        <div className="col-md-6 mt-3 pb-3">
            Hi i'm 
            <div className="fs-1 fw-bolder mb-2">Abishkar Rai</div>
            <div><i className="fa-brands fa-linkedin text-danger"></i> <i className="fa-brands fa-github text-primary"></i></div>

            <p>I recently finished my BIT Program and i am currenly doing job ready program at dented code and i am have solving solving nature.</p>
        <Button className="btn btn-danger">Download Resume</Button>
        </div>
      </div>
</Container>

</div>

  );
};
