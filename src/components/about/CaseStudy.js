import React, { Component } from 'react';

import * as opc from '../home/Home';

import './AboutCss.css';


function CaseStudy(){
    return(
        <>
        <div className="AbCImage">
            <div className="AbCImageText">
            <h2>Cases We Solve</h2>
        </div>
        </div>
        <div style={{marginBottom:"5vh"}} >
            <opc.RecentWork/>
        </div>
        </>
    );
    }
export default CaseStudy;