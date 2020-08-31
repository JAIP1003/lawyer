import React, { Component } from 'react';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './AboutCss.css';


function AboutCoverP(){
    return(
        <>
        <div className="AbCImage">
            <div className="AbCImageText">
            <h2>About</h2>
        </div>
        </div>
        </>
    );
    }

function WeDealOurCases(){
    return(
        <div className="weDealOurCases">
        <Container>
            <Row>
                <Col lg={6}>
                <div className="aboutCaption2 mb-50">
                <h3>How we deal Our Cases</h3>
                <div className="sendCv">
                <a href="#">youremail@colorlib.com</a>
                <hr></hr>
                </div>
                </div>
                </Col>

                <Col>
                <div className="aboutCaption mb-50">
                    <h3>You can’t use up creativity. The more you use, the
                    more you have in your signifant mind.</h3>
                    <div className="experience">
                    <div className="year">
                    <span>05</span>
                    </div>
                    <div class="yearDetails"><p>YEARS OF<br/> DIGITAL EXPERIENCE</p></div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default AboutCoverP;
export {WeDealOurCases};