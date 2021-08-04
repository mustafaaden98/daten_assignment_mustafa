import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import ContactUs from './Components/ContactUs/ContactUs';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Header />
      {/* <Router> */}
        <Switch>
          <Route path = "/" exact render = {(props) => (<Home {...props} />)} />
          <Route path = "/about"  render = {(props) => <About {...props} />} />
          <Route path = "/what-we-do"  render = {(props) => <WhatWeDo {...props} />} />
          <Route path = "/sign-uo-news"  render = {(props) => <NewsLetter {...props} />} />
          <Route path = "/contact-us"  render = {(props) => <ContactUs {...props} />} />
          {/* <Route path = "/about"  component = {About} /> */}
        </Switch>
      {/* </Router> */}
    </Fragment>

  );
}

export default App;
