import React, { Component } from 'react';
import AboutCoverP,{WeDealOurCases} from './About';
import * as op from '../home/Home';

function AboutAll(){
    return(
        <>
     <AboutCoverP/>
     <WeDealOurCases/>
     <op.AboutLawAgency/>
     <op.OurLawyer/>
     <op.OlivaJamCarousel/>
     <op.InsightTrend/>
     </>
    );
}

export default AboutAll;