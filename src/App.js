import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Blocicon from "./images/bloc_jams_logo.png";


class App extends Component {
  constructor(props, context) {
    super(props,context);
    this.state = {
    open: false
  };
}
  render() {
    return (
      <div className="App">
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
          <Link to ='/' className="App-logo">
            <img src= { Blocicon } alt="bloc jams logo" id="logo-pic" />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
         <Navbar.Collapse>
        
         <Nav pullRight>
          <NavItem eventKey={1} href="#"> 
            <div className="icon ion-ios-home" id="nav-pic"></div> 
            <Link to ='/' id="nav-link">Home</Link>
          </NavItem>

          <NavDropdown eventKey={2} title="Library" id="nav-link" className="icon ion-ios-musical-note">
            <MenuItem eventKey={2.1}>
              <div className="icon ion-ios-download" id="nav-pic"></div>
              <Link to='/library' id="drop-link">Albums</Link></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.2}>
              
              <div className="icon ion-ios-arrow-round-forward" id="drop-pic"></div>
              <Link to ='/album/the-colors' id="drop-link">The Colors</Link></MenuItem>
              
              
            <MenuItem divider />
            <MenuItem eventKey={2.3}>
              
              <div className="icon ion-ios-arrow-round-forward" id="drop-pic"></div>
              <Link to ='/album/the-telephone' id="drop-link">The Telephone</Link></MenuItem>
              
              
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library"  component={Library} />
          <Route path="/album/:slug" component={Album} />
          
        </main> 
      </div>
    );
  }
}

export default App;
