import React from 'react';

import './App.css';

import Navbar from './components/navbars/Navbar';
import HomeAll from './components/home/HomeAll';
import Footer from './components/footer/Footer';
import AboutAll from './components/about/AboutAll';
import Services from './components/about/Services';
import CaseStudy from './components/about/CaseStudy';
import Contact from './components/about/Contact';
import Blog from './components/about/Blog';
import BlogDetails from './components/about/BlogDetails';
import Elements from './components/about/Elements';
import CaseDetails from './components/about/CaseDetails';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
            <Switch>
                <Route path="/" component={HomeAll} exact />
                <Route path="/AboutAll" component={AboutAll} exact/>
                <Route path="/Services" component={Services} exact/>
                <Route path="/CaseStudy" component={CaseStudy} exact/>
                <Route path="/Contact" component={Contact} exact/>
                <Route path="/Blog" component={Blog} exact/>
                <Route path="/BlogDetails" component={BlogDetails} exact/>
                <Route path="/Elements" component={Elements} exact/>
                <Route path="/CaseDetails" component={CaseDetails} exact/>
            </Switch>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
