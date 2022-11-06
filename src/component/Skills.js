import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Skills = () => {
  return (
    <div className="wrapper mt-3 mb-5" >
  <div className="title">
    <span>Skills</span>
  </div>
<Container>
  <div className="icons">
    <div> <i className="fa-brands fa-square-js text-warning"></i>Javascript</div>
    <div> <i className="fa-brands fa-css3-alt text-primary"></i>CSS </div>
    <div> <i className="fa-brands fa-bootstrap text-primary"></i>BootStrap</div>
    <div> <i className="fa-brands fa-html5 text-danger"></i>HTML</div>
    <div><i className="fa-brands fa-react text-primary"></i>React.js</div>
    
    


  </div>

</Container>
</div>

  );
};
