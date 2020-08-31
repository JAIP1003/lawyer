import React, { Component } from 'react';

import * as opp from '../home/Home';

import './AboutCss.css';


function Services(){
    return(
        <>
        <div className="AbCImage">
            <div className="AbCImageText">
            <h2>Services</h2>
        </div>
        </div>
        <div style={{marginBottom:"5vh"}} >
            <opp.PracticingAreaCards1/>
            <opp.PracticingAreaCards2/>
        </div>
        </>
    );
    }
export default Services;