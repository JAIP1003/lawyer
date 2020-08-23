import React, { Component } from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import './NavbarCss.css';

function Navbar()
{
    return(
        <Container-fluid>
            <div className="menu">
            <Row className="m-0">

                <Col  className="">
                
                <div className="logo">
                <a href="#"><img src="" alt=""/>
                <span className="span1l"> LOGO </span><span className="span2l"> Lawyer</span></a>
                </div>
                </Col>
                    
                <Col-10  className="text-right">
                <div className="mainMenu ">
                <div className="menuToggle"><i class="fa fa-bars" aria-hidden="true"></i></div>
                    <nav className="active">
                    <ul id="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Case Studies </a></li>
                    <li><a href="#">Blog</a>
                    <ul class="submenu">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Blog Details</a></li>
                    <li><a href="#">Element</a></li>
                    <li><a href="#">Case Details </a></li>
                    </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                    </ul>
                    </nav>
                    <div className="headerBtn">
                    <a href="#">01654.066.456</a>
                    </div>
                    
                    </div>
                </Col-10>

            </Row>
            </div>
        </Container-fluid>
    );
}

export default Navbar;