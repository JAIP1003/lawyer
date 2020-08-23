import React, { Component } from 'react';

import './FooterCss.css';

import {Container, Row, Col,Form,Button} from 'react-bootstrap';

function Footer(){
    return(
        <div className="footer">
            <Container-fluid>
                <Row className="m-0 row1">
                    <Col lg={4} xl={4}>
                    <div className="singleFooterCaption">
                    <div className="footerLogo">
                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/>LOGO</a>
                    </div>
                    <div className="footerTittle">
                    <div className="footerPera">
                    <p className="info1">Receive updates and latest news direct from Simply enter.</p>
                    </div>
                    </div>
                    <div className="footerNumber">
                    <h4><span>+564 </span>7885 3222</h4>
                    <p>youremail@gmail.com</p>
                    </div>
                    </div>
                    </Col>
                    <Col  lg={4} xl={2} className="FC2List">
                    <div className="singleFooterCaption">
                        <div className="footerTittle">
                        <h4>Our Support</h4>
                        <ul>
                        <li><a href="#">Advanced</a></li>
                        <li><a href="#"> Management</a></li>
                        <li><a href="#">Corporate</a></li>
                        <li><a href="#">Customer</a></li>
                        <li><a href="#">Information</a></li>
                        </ul>
                        </div>
                        </div>
                    </Col>
                    <Col lg={4} xl={2} className="FC2List">
                    <div className="singleFooterCaption mb-50">
                        <div className="footerTittle">
                        <h4>Quick Link</h4>
                        <ul>
                        <li><a href="#">New Law</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Licenses</a></li>
                        </ul>
                        </div>
                        </div>
                    </Col>
                    <Col lg={4} xl={4}>
                    <div className="singleFooterCaption mb-50">
                    <div className="footerTittle">
                    <h4>Newslatter</h4>
                    <div className="footerPera">
                    <p className="info1">Subscribe now to get daily updates</p>
                    </div>
                    </div>
                    <Form>
                        <div className="footerForm">
                        <span >
                            <Form.Control className="FFEmail" type="email" placeholder="Your email address" />
                        </span>
                        <span>
                        <Button className="FFButton" type="submit">
                           Send
                        </Button>
                        </span>
                        </div>
                    </Form>
                    
                  
                   </div>
                    </Col>
                </Row>
                <Row className="m-0 footerRow2">
                    <Col xl={11} >
                    <div className="footerCopyRight">
                        <p>
                        Copyright © 2020 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                        </div>
                    </Col>
                    
                    <Col >
                    <div className="footerSocialRight">
                        <a href="#">Tw</a>
                        <a href="#">fb</a>
                        <a href="#">gl</a>
                        <a href="#">in</a>
                        </div>
                    </Col>  
                </Row>
            </Container-fluid>
        </div>

    );
}

export default Footer;