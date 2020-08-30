import React, { Component } from 'react';
import * as jp from './Home';

import Navbar from '../navbars/Navbar';

import './HomeCss.css';


function HomeAll(){
    return(
        <>
        <jp.default/>
        <jp.PracticingAreaCards1/>
        <jp.AboutLawAgency/>
        <jp.FillUpToGet/>
        <jp.RecentWork/>
        <jp.FCConsultant/>
        <jp.OurLawyer/>
        <jp.OlivaJamCarousel/>
        <jp.InsightTrend/>
        </>
    );
}

export default HomeAll;