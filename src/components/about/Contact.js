import React, { Component } from 'react';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';


import './AboutCss.css';


function Contact(){
    return(
        <>
        <div className="AbCImage">
            <div className="AbCImageText">
            <h2>Contact Us</h2>
        </div>
        </div>
        <div style={{marginBottom:"5vh"}} >
        </div>

        <section style={{margin:"30px 7% 0 7%"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01016889236!2d85.07300151213991!3d25.608020764037622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1597306766423!5m2!1sen!2sin" 
            style={{width:"100%", height:"80vh", frameborder:"0", border:"0"}} ></iframe>
            </section>
        </>
    );
    }


function GetInTouch(){
    return(
        <div className="getInTouch">
            <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
            </div>
        <Container-fluid>
            <Row>
                <Col xl={8} className="getInTouchCol1">
                <Form>
                         <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="10" >Message</Form.Control>
                        </Form.Group>
                        <Container-fluid>
                            <Row className="m-0 p-0">
                                <Col lg={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control className="itemInput" type="text" placeholder="Name" />
                        </Form.Group>
                                </Col> 
                                <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control className="itemInput" type="email" placeholder="Email" />
                        </Form.Group>
                                </Col>
                            </Row>
                        </Container-fluid>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control className="itemInput" type="text" placeholder="Enter Subject" />
                        </Form.Group>
                        <span className="btnnCT">
                        <Button   className="itemInput" variant="primary" size="lg" block>
                         Send
                             </Button>
                        </span>
                        </Form>
                </Col>
                <Col>
                <div className="contactInfoTop">
                <div className="media contact-info">
                <span style={{marginRight:"20px",color:"#3957ff"}} className="contact-info__icon"><i className="ti-home"></i>LOGO </span>
                <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
                </div>
                </div>
                <div className="media contact-info">
                <span style={{marginRight:"20px",color:"#3957ff"}} className="contact-info__icon"><i className="ti-tablet"></i>LOGO </span>
                <div className="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
                </div>
                </div>
                <div className="media contact-info">
                <span style={{marginRight:"20px",color:"#3957ff"}} className="contact-info__icon"><i className="ti-email"></i>LOGO </span>
                <div className="media-body">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
                </div>
                </div>
                </div>
                </Col>
            </Row>
        </Container-fluid>
        </div>
    );
}
export default Contact;
export {GetInTouch};