import React, { Component } from 'react';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './HomeCss.css';
import { propTypes } from 'react-bootstrap/esm/Image';

function CommittedToSuccess(){
    return(
        <>
        <div className="CTSImage">
            <div className="CTSImageText">
                <span><hr></hr>Committed to success</span>
                <h1>Dont Feel Helpless We Fight for Justice</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                <div>
                <a href="about.html" >Learn About Us</a>
                </div>
                <div className="LearnBtn"></div>
                </div>   
        </div>
        </>
    );
    }


function PracticingAreaCard(props){
    return(
        <div className="PACard">
        <Container>
            <Row>
                <Col>
                    <div class="singleCat">
                    <div class="catIcon">
                    <span className="flaticonCar">{props.logo}</span>
                    </div>
                    <div class="catCap">
                    <h3><a href="services.html">{props.title} </a></h3>
                    <p>{props.paraInfo}</p>
                    <a href="services.html" className="readMore1">Read More &gt;</a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

const PracticingAreaInfoArray=[
    {
        logo:"Logo",
        title:"Health Law",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
    {
        logo:"Logo",
        title:"Insurance Law",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
    {
        logo:"Logo",
        title:"Vehical Accident",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
    {
        logo:"Logo",
        title:"Health Law",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
    {
        logo:"Logo",
        title:"Health Law",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
    {
        logo:"Logo",
        title:"Health Law",
        paraInfo:"Sorem hpsum folor sixdsft amhtget, consectetur adipiscing eliht, sed do eiusmod tempor incidi.",
    },
]


function PracticingAreaCards1(){
    return(
        <div className="ourPracticingArea">
                 <div className="OPAImageText">
                <span><hr></hr>OUR PRACTICING AREA</span>
                <h1>Area Of Practice That Can Help You To Win</h1>
                </div>
            <Container-fluid>
                <Row className="m-0">
                    <Col lg={6} xl={4}>
                    <PracticingAreaCard
                        logo={PracticingAreaInfoArray[0].logo}
                        title={PracticingAreaInfoArray[0].title}
                        paraInfo={PracticingAreaInfoArray[0].paraInfo}
                    />
                    </Col>

                    <Col lg={6} xl={4}>
                    <PracticingAreaCard
                        logo={PracticingAreaInfoArray[1].logo}
                        title={PracticingAreaInfoArray[1].title}
                        paraInfo={PracticingAreaInfoArray[1].paraInfo}
                    />
                    </Col>

                    <Col lg={6} xl={4}>
                    <PracticingAreaCard
                        logo={PracticingAreaInfoArray[2].logo}
                        title={PracticingAreaInfoArray[2].title}
                        paraInfo={PracticingAreaInfoArray[2].paraInfo}
                    />
                    </Col>
                </Row>
            </Container-fluid>
        </div>
    );
}


function OurLawyer(){
    return(
        <div className="ourPracticingArea">
                <div className="OPAImageText">
                <span><hr></hr>OUR LAWYERS</span>
                <h1>Meet Our Dedicated Team Members.</h1>
                </div>
                <Container-fluid>
                <Row className="m-0">
                    <Col lg={6} xl={4}>
                    <div className="singleTeam">
                    <div className="teamImgTop">
                        <div className="teamImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        </div>
                        </div>
                        <div className="teamCaption">
                        <h3><a href="#">Ethan Welch</a></h3>
                        <span><hr></hr>Chir Lawyer</span>
                        </div>
                    </div>
                    </Col>

                    <Col lg={6} xl={4}>
                    <div className="singleTeam">
                    <div className="teamImgTop">
                        <div className="teamImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        </div>
                        </div>
                        <div className="teamCaption">
                        <h3><a href="#">Trevor Stanley</a></h3>
                        <span><hr></hr>Junior Lawyer</span>
                        </div>
                    </div>
                    </Col>

                    <Col lg={6} xl={4}>
                    <div className="singleTeam">
                        <div className="teamImgTop">
                        <div className="teamImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        </div>
                        </div>
                        <div className="teamCaption">
                        <h3><a href="#">Allen Guzman</a></h3>
                        <span><hr></hr>Senior Lawyer</span>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container-fluid>
        </div>

    );
}

function AboutLawAgency(){
    return(
        <div className="aboutLawAgcy">
            <Container-fluid>
                <Row  className="m-0">
                    <Col xl={6} className="p-0">
                    <div className="ALAImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                    </div>
                    </Col>
                    <Col xl={6} className="ALACol2">
                    <div className="aboutDetails">
                        <div className="rightCaption">
                        <div className="sectionTittle sectionTittle2">
                        <span><hr/>About Our Law agency</span>
                        <h2>We are commited for better service</h2>
                        </div>
                        <div className="aboutMore">
                        <p className="peraTop">Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu.</p>
                        <p className=" peraBottom">Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit  esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
                        <a href="about.html" className="btn postBtn">Learn About Us</a>
                        </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container-fluid>
        </div>
    );
}

function FCConsultant(){
    return(
        <div className="fCConsultant">
            <Container-fluid>
                <Row className="m-0">
                    <Col xl={9}>
                    <div className="wantToWorkCaption">
                        <h2>Are you Searching For a First-Class Consultant?</h2>
                    </div>
                    </Col>
                    <Col >
                    <span className="btnCoslTop">
                    <a href="#" className="btnConsultant frifht">Contact Now</a>
                    </span>
                    </Col>
                </Row>
            </Container-fluid>
        </div>
    );
}


function RecentWork(){
    return(
         <div className="recentWorkDiv" >
             <div className="ourPracticingArea ">
                 <Container-fluid>
                     <Row className="m-0">
                         <Col >
                         <div className="OPAImageText">
                         <span><hr></hr>OUR RECENT WORK</span>
                            <h1>Reliable, Effective & Wining Law For Customers</h1>
                        </div>
                         </Col>
                         <Col xl={6}>
                         <div className="propertiesButton">
                            <nav>
                            <div className="nav navTabs"  >
                            <a className="nav-item " href="#" >Accident Law </a>
                            <a className="nav-item " href="#" > Health Law</a>
                            <a className="navItem3 " href="#" > Insurance Law </a>
                            </div>
                            </nav>

                            </div>
                         </Col>
                     </Row>
                 </Container-fluid>

            <Container-fluid>
                <Row className="m-0">
                    <Col xl={6} className="colmn">
                    <div className="singleServices mb-100">
                        <div className="servicesImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        <div className="servicesCaption">
                        <span><hr></hr>Car Accident Law</span>
                        <p><a href="cases_details.html">Within the construction industry as their overdraft</a></p>
                        </div>
                        </div>
                        </div>
                    </Col>
                    <Col   className="colmn">
                    <div className="singleServices mb-100">
                        <div className="servicesImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        <div className="servicesCaption">
                        <span><hr></hr>Car Accident Law</span>
                        <p><a href="cases_details.html">Construction industry as their over draft for critical law</a></p>
                        </div>
                        </div>

                        </div>
                    </Col>
                    <Col xl={6} className="colmn">
                    <div className="singleServices mb-100">
                        <div className="servicesImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        <div className="servicesCaption">
                        <span><hr></hr>Car Accident Law</span>
                        <p><a href="cases_details.html">Retail banks wake up to digital lending this year</a></p>
                        </div>
                        </div>

                        </div>
                    </Col>
                    <Col  className="colmn">
                    <div className="singleServices mb-100">
                        <div className="servicesImg">
                        <img src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                        <div className="servicesCaption">
                        <span><hr></hr>Car Accident Law</span>
                        <p><a href="cases_details.html">Within the construction industry as their overdraft</a></p>
                        </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container-fluid>
        </div>
        </div>
    );
}


function FillUpToGet(){
    return(
        <div className="fillUpToGet">
            <div className="fUTGImg">
            <img src="http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/h2-bg01.jpg" alt=""/>
           <div className="fUTGForm">
            <Container >
                <Row className="m-0 ">
                    <Col className="fUTGFormContainer">
                    <div className="aboutDetails">
                        <div className="rightCaption">
                        <div className="sectionTittle sectionTittle2">
                        <span><hr/>About Our Law agency</span>
                        <h2>We are commited for better service</h2>
                        </div>
                        </div>
                        </div>
                    <Form>
                        <Container-fluid>
                            <Row className="m-0">
                                <Col lg={6}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control  type="text" placeholder="Name" />
                        </Form.Group>
                                </Col> 
                                <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control  type="Number" placeholder="Phone" />
                        </Form.Group>
                                </Col>
                            </Row>
                            <Row className="m-0">
                                <Col lg={6}>
                                <Form.Group controlId="exampleForm.ControlSelect1" >
                            <Form.Control as="select" >
                            <option>Health Law</option>
                            <option>Saiful Islam</option>
                            <option>Arafath Miya</option>
                            <option>Shakil Miya</option>
                            <option>Tamim Shaker</option>
                            </Form.Control>
                        </Form.Group>
                                </Col> 
                                <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control  type="email" placeholder="Email" />
                        </Form.Group>
                                </Col>
                            </Row>
                        </Container-fluid>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="4" >Message</Form.Control>
                        </Form.Group>
                        <Button  variant="primary" size="lg" block>
                         Summit Now
                             </Button>
                        </Form>

                      
                    </Col>
                </Row>
            </Container>
            </div>
            </div>
        </div>
    );
}


function InsightTrend(){
    return(
        <div className="ourPracticingArea">
                 <div className="OPAImageText">
                <span><hr></hr>INSIGHT AND TRENDS ARTICLES</span>
                <h1>Lawyers news from around the world selected by us.</h1>
                </div>
            <Container-fluid>
                <Row className="m-0">
                    <Col xl={6} className="colmn">
                    <div >

                        <div className="ITGCaption">
                        <ul>
                     <li >
                      By Admin - October 27, 2020
                      </li>
                    </ul>
                     </div>
                    <div className="blogCap">
                     <h3><a href="#">16 Easy Ideas to Use in Our Everyday
                     Stuff in Kitchen.</a></h3>
                     <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                         labore et dolore magnua Quis ipsum suspendisse ultrices gra.
                         </p>
                     <a href="#" className="moreBtn"><span><hr></hr>Read More</span></a>
                     </div>
                   
                        </div>
                    </Col>
                    <Col   className="colmn">
                    <div >
                    <div className="ITGCaption">
                        <ul>
                     <li >
                      By Admin - October 27, 2020
                      </li>
                    </ul>
                     </div>
                      <div className="blogCap">
                     <h3><a href="#">16 Easy Ideas to Use in Our Everyday
                     Stuff in Kitchen.</a></h3>
                     <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                         labore et dolore magnua Quis ipsum suspendisse ultrices gra.
                         </p>
                     <a href="#" className="moreBtn"><span><hr></hr>Read More</span></a>
                     </div>
                        </div>
                    </Col>

                </Row>
            </Container-fluid>
        </div>

    );
}



function OlivaJam(){
    return(
        <Container>
            <Row className="m-0">
                <Col>
                <div className="testimonialCaption ">
                    <div className="testimonialTopCap text-center">
                       
                 <span style={{color:"#fff",fontWeight:"900",fontSize:"60px"}}>LOGO</span>
                   
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel 
                        facilisis por incididunt ut labore et dolore mas. </p>
                    </div>

                    <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founderImg">
                    <img style={{width:"17vh"}} src="https://i.ibb.co/V9Ck6qs/photo-1593642532842-98d0fd5ebc1a-ixlib-rb-1-2.jpg" alt=""/>
                    </div>
                    <div className="founderText">
                    <span>Oliva Jems</span>
                    <p>Chif Lawyer</p>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}



const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 100 },
    items: 1,
    slidesToSlide: 1
  }
};






function OlivaJamCarousel(){
    
    return(
        <div className="OJCarousel">
      <Carousel swipeable={true}
      draggable={true}
      showDots={false}
      arrows={true}
      infinite={true}
      responsive={responsive}>
  <div> <  OlivaJam /></div>
  <div> <  OlivaJam />
      </div>
      <div> <  OlivaJam />
      </div>
      <div> <  OlivaJam />
      </div>
</Carousel>
</div>
    );
}




 


export default CommittedToSuccess;
 export {PracticingAreaCards1,OurLawyer,AboutLawAgency,FCConsultant,RecentWork, FillUpToGet,InsightTrend,OlivaJam,OlivaJamCarousel};
