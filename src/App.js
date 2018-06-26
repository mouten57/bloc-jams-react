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
           {/*added componentClass={Link} to avoid a as child of a*/}
          <NavItem componentClass={Link} eventKey={1} href="/" to="/" id="nav-link"> 
            <div className="icon ion-ios-home" id="nav-pic"></div> 
           Home
          </NavItem>

          <NavDropdown eventKey={2} title="Library" id="nav-link" className="icon ion-ios-musical-note">
            <MenuItem eventKey={2.1} componentClass={Link} href="/libary" to="/library" id="drop-link">
              <div className="icon ion-ios-download" id="nav-pic"></div>
              Albums
              </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.2} componentClass={Link} href="/album/the-colors"to="/album/the-colors" id="drop-link">
              
              <div className="icon ion-ios-arrow-round-forward" id="drop-pic"></div>
              The Colors
              </MenuItem>

            <MenuItem divider />
            <MenuItem eventKey={2.3} componentClass={Link} href="/album/the-telephone" to="/album/the-telephone" id="drop-link" >
              
              <div className="icon ion-ios-arrow-round-forward" id="drop-pic"></div>
              The Telephone</MenuItem>

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
