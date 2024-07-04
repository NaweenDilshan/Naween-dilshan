import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiNodejs,
  DiSpringBoot,
  DiSwift,
  DiUikit,
  
} from "react-icons/di";
import {
  SiMaterialui,
 
  SiRedux,
  SiMongodb,
  
  SiTypescript,
  SiSpringboot

} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
      </Col>
      
    </Row>
  );
}

export default Techstack;
