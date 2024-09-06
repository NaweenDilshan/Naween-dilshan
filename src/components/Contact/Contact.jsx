import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0d94cdo', 'template_65dy36o', form.current, {
        publicKey: '0AHtEbQXQZcoC0aX7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
      <>
      <br/><br/><br/><br/>
        <Container style={{paddingTop: '50px'}}>
          <Row>
          <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">

      <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" className="user"  placeholder="Name" />
      
      <input type="email" name="user_email"  className="user" placeholder="Email" />
      
      <textarea name="message" className="user" placeholder="Message"/>

      <input type="submit" className="user" value="Send" />
      
    </form>
    </Col>

    </Row>
        </Container>
        <br/><br/><br/><br/><br/>
        </>
        
    )
}

export default Contact